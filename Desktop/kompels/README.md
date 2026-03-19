# Kompels Website — Ontwikkelaarsdocumentatie

## Projectoverzicht
Statische HTML/CSS/JS website voor Kompels — strategische gedragsarchitectuur voor leiderschapsteams.  
Geen framework vereist. Werkt direct in de browser. Geschikt voor elke hostingomgeving.

---

## Bestandsstructuur

```
kompels/
├── index.html                  ← Homepage
├── onderwijs.html              ← Pagina: In het onderwijs
├── organisaties.html           ← Pagina: Voor organisaties
├── workshops.html              ← Pagina: Workshops & programma's
├── over-ons.html               ← Pagina: Over ons
├── contact.html                ← Pagina: Contact
│
├── pages/
│   ├── inzichten.html          ← Overzichtspagina inzichten
│   ├── artikel-strategie.html  ← Artikel: Strategie & leiderschapsgedrag
│   ├── artikel-harmonie.html   ← Artikel: Harmonieuze MT's
│   ├── artikel-alignment.html  ← Artikel: Illusie van alignment
│   ├── artikel-vertrouwen.html ← Artikel: Begrip en vertrouwen
│   ├── artikel-energie.html    ← Artikel: Energie uit mensen
│   └── artikel-apollo.html     ← Artikel: Ik gun al mijn collega's
│
├── css/
│   ├── variables.css           ← Design tokens (kleuren, fonts, spacing)
│   ├── base.css                ← Reset, typografie, body
│   ├── components.css          ← Herbruikbare UI-componenten
│   ├── layout.css              ← Nav, footer, grid-systemen
│   └── pages.css               ← Paginaspecifieke stijlen
│
├── js/
│   ├── nav.js                  ← Navigatie, mobile menu, active states
│   └── ui.js                   ← Scroll-animaties, formulier, filter
│
└── assets/
    ├── logo.svg                ← Placeholder: Kompels logo
    └── og-image.jpg            ← Placeholder: Open Graph afbeelding
```

---

## Kleuren & Design tokens

| Token              | Waarde     | Gebruik                        |
|--------------------|------------|-------------------------------|
| `--moss`           | `#1E3A2F`  | Primaire kleur (donkergroen)   |
| `--moss-mid`       | `#2D5244`  | Hover states                   |
| `--moss-light`     | `#3D6354`  | Secundaire accenten            |
| `--gold`           | `#A8813A`  | Accent / CTA / highlights      |
| `--gold-light`     | `#C4A054`  | Hover gold, tekst op donker    |
| `--gold-pale`      | `#F0E6D0`  | Icoon-achtergronden            |
| `--sand`           | `#F6F1E9`  | Sectie-achtergrond licht       |
| `--sand-dark`      | `#DDD3BC`  | Borders, dividers              |
| `--cream`          | `#FDFAF5`  | Pagina-achtergrond             |
| `--ink`            | `#1A1F1C`  | CTA-secties, donkere blokken   |

---

## Typografie

- **Display / koppen:** Playfair Display (Google Fonts) — 400, 600, italic
- **Body / UI:** DM Sans (Google Fonts) — 300, 400, 500

```html
<!-- Voeg toe in <head> van elk HTML-bestand -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet">
```

---

## Technische vereisten

- Geen build-tool of framework nodig
- Werkt op alle moderne browsers (Chrome, Firefox, Safari, Edge)
- Responsive: mobile-first vanaf 375px
- Breakpoints: 480px / 768px / 1024px / 1280px

---

## Hosting

De website kan worden gehost op:
- **Statische hosting:** Netlify, Vercel, GitHub Pages (gratis)
- **Traditionele hosting:** Elke webserver met Apache/Nginx
- **CMS-integratie:** Eenvoudig te converteren naar WordPress (thema), Webflow of Kirby

---

## Wat de developer nog moet doen

1. **Logo plaatsen** — `assets/logo.svg` vervangen door het echte Kompels-logo
2. **Foto's toevoegen** — Placeholder-blokken in `over-ons.html` vervangen door echte teamfoto's
3. **Formulier koppelen** — Contactformulier in `contact.html` koppelen aan backend (bijv. Formspree, Netlify Forms of eigen server)
4. **Analytics** — Google Analytics of Plausible toevoegen in `<head>`
5. **OG-tags** — Open Graph afbeelding aanmaken voor social sharing (`assets/og-image.jpg`)
6. **Domein** — Verwijzen naar `www.kompels.com`
7. **SSL** — HTTPS activeren op hostingomgeving

---

## Contact opdrachtgever

**Henk Westerveld** — henk@kompels.nl — 06 246 07 580  
**Kompels Westerveld** — gert@kompels.nl — 06 104 15 025
