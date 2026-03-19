/* ============================================================
   ui.js — Scroll-animaties, formulier, inzichten-filter
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── Scroll-animaties (fade-in) ──
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: toon alles direct
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ── Inzichten filter ──
  var filterBtns = document.querySelectorAll('.filter-btn');
  var izCards = document.querySelectorAll('.iz-card[data-category]');

  if (filterBtns.length > 0 && izCards.length > 0) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Active state
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var category = btn.getAttribute('data-filter');

        izCards.forEach(function (card) {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ── Contactformulier validatie & verzending ──
  var form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simpele validatie
      var required = form.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = '#c0392b';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });

      if (!valid) {
        var firstInvalid = form.querySelector('[required]:invalid, [required][style*="c0392b"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Formulier verzenden
      // DEVELOPER: vervang onderstaande fetch door uw eigen endpoint (Formspree, Netlify, etc.)
      var submitBtn = form.querySelector('[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Versturen...';
      submitBtn.disabled = true;

      // Voorbeeld met Formspree (vervang YOUR_FORM_ID):
      // fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   body: new FormData(form),
      //   headers: { 'Accept': 'application/json' }
      // }).then(function(response) {
      //   if (response.ok) {
      //     showFormSuccess();
      //   } else {
      //     showFormError();
      //   }
      //   submitBtn.textContent = originalText;
      //   submitBtn.disabled = false;
      // });

      // Tijdelijk: simuleer succesvolle verzending
      setTimeout(function () {
        showFormSuccess(form);
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 800);
    });
  }

  function showFormSuccess(form) {
    var existing = document.querySelector('.form-success');
    if (existing) existing.remove();

    var msg = document.createElement('div');
    msg.className = 'form-success';
    msg.style.cssText = 'background:#1E3A2F;color:#FDFAF5;padding:16px 20px;border-radius:3px;font-size:14px;line-height:1.6;margin-top:16px;';
    msg.textContent = 'Bedankt voor uw bericht. Wij nemen binnen één werkdag contact met u op.';
    form.appendChild(msg);
    form.reset();
  }

  // ── Smooth anchor scroll ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var navH = document.querySelector('.site-nav') ? document.querySelector('.site-nav').offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.scrollY - navH - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

});
