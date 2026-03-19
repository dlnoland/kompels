/* ============================================================
   nav.js — Navigatie, mobile menu, active states
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── Active nav-link op basis van huidige pagina ──
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && (href === currentPage || href.replace('./', '') === currentPage)) {
      link.classList.add('active');
    }
  });

  // ── Mobile menu toggle ──
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.nav-mobile');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    // Sluit menu bij klik op een link
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Sluit menu bij klik buiten het menu
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !mobileNav.contains(e.target)) {
        toggle.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // ── Nav achtergrond bij scrollen ──
  var nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        nav.style.borderBottomColor = 'var(--sand-dark)';
      } else {
        nav.style.borderBottomColor = 'var(--sand-dark)';
      }
    });
  }

});
