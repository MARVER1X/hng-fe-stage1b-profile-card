# HNG Stage 1B — Profile Card

A clean, accessible, and responsive Profile Card component built with vanilla HTML, CSS, and JavaScript. Submitted as part of the HNG Internship i14 Frontend track Stage 1B task.

---

## 🔗 Live Demo

[View Live on GitHub Pages](https://MARVER1X.github.io/hng-fe-stage-1b-profile-card/)

---

## ✅ Features

- **Profile Card** with avatar, name, and biography
- **Live Epoch Time** — displays `Date.now()` in milliseconds, updates every second with `aria-live="polite"` for screen reader support
- **Social Links** — Twitter, GitHub, LinkedIn — all open in new tab with `rel="noopener noreferrer"`
- **Hobbies & Dislikes** — distinct semantic lists
- **Fully Accessible** — meaningful alt text, keyboard navigable, WCAG AA contrast, visible focus styles
- **Responsive** — stacked on mobile, side-by-side avatar/content layout on tablet and desktop

---

## 🧪 Testability

All required `data-testid` attributes are implemented exactly as specified:

| Element | `data-testid` |
|---|---|
| Card root | `test-profile-card` |
| Name | `test-user-name` |
| Biography | `test-user-bio` |
| Epoch time | `test-user-time` |
| Avatar image | `test-user-avatar` |
| Social links container | `test-user-social-links` |
| Twitter link | `test-user-social-twitter` |
| GitHub link | `test-user-social-github` |
| LinkedIn link | `test-user-social-linkedin` |
| Hobbies list | `test-user-hobbies` |
| Dislikes list | `test-user-dislikes` |

---

## ♿ Accessibility

- Avatar has meaningful `alt` text describing the person
- `<nav>` has `aria-label="Social media links"` for screen reader context
- `<time>` element has `datetime` attribute updated dynamically via JS
- `aria-live="polite"` on the time element notifies screen readers of updates
- All links have visible `:focus-visible` outline styles
- Color contrast meets WCAG AA throughout

---

## 🗂️ Project Structure

```
├── index.html     # Semantic markup and card structure
├── styles.css     # Dark theme, responsive layout
└── script.js      # Live epoch time logic
```

---

## 🛠️ Built With

- HTML5 (semantic elements: `article`, `figure`, `header`, `nav`, `section`)
- CSS3 (custom properties, flexbox, media queries)
- Vanilla JavaScript

---

## 🚀 Running Locally

No build step needed:

```bash
git clone https://github.com/MARVER1X/hng-stage-1b-profile-card.git
cd hng-stage-1b-profile-card
# Open index.html in your browser
```

---

## 👤 Author

**Marvellous**
- GitHub: [@MARVER1X](https://github.com/MARVER1X)

---

*Submitted for HNG Internship i14 — Frontend Stage 1B*
