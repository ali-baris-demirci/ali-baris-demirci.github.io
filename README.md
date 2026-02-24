# ali-baris-demirci.github.io

Personal portfolio website for **Ali Baris Demirci** — Data Analyst, BI Specialist & Data Engineer.

🔗 **Live:** [ali-baris-demirci.github.io](https://ali-baris-demirci.github.io)

---

## About

A minimalist, responsive portfolio built to showcase my professional experience, technical skills, projects, and certifications. All content is centralized in a single data file for easy maintenance.

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React](https://react.dev) | UI framework |
| [Vite](https://vitejs.dev) | Build tool |
| [react-scroll](https://www.npmjs.com/package/react-scroll) | Smooth section navigation |
| [react-icons](https://react-icons.github.io/react-icons) | Icon library |
| [gh-pages](https://www.npmjs.com/package/gh-pages) | Deployment to GitHub Pages |
| [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter) | Typography |

## Project Structure
ali-baris-demirci.github.io/
├── public/
│ ├── kafa.png ← profile photo
│ ├── Ali_Baris_Demirci_Resume.pdf ← master resume
│ ├── favicon.svg ← hourglass favicon
│ ├── og-preview.jpg ← Open Graph preview image
│ ├── robots.txt ← search engine crawler rules
│ ├── sitemap.xml ← sitemap for Google indexing
│ └── 404.html ← SPA redirect for unknown routes
├── src/
│ ├── components/ ← 11 section components
│ ├── data/
│ │ └── portfolioData.js ← all site content lives here
│ ├── styles/ ← per-component CSS + global styles
│ ├── App.jsx
│ └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── structure.txt
├── LICENSE
└── README.md


## Sections

1. **Hero** — intro, photo, CTA buttons, key stats
2. **About** — bio & quick facts
3. **Skills** — technical, tools, soft skills, methodologies, languages
4. **Experience** — career timeline with expandable details
5. **Projects** — academic & professional work (tabbed)
6. **Education** — degrees & achievements
7. **Certifications** — professional certificates with links
8. **Interests** — hobbies & fun facts
9. **Contact** — email, LinkedIn, GitHub, location
10. **Footer** — socials & copyright

## Getting Started

```bash
# Clone
git clone https://github.com/ali-baris-demirci/ali-baris-demirci.github.io.git
cd ali-baris-demirci.github.io

# Install
npm install

# Dev server
npm run dev

# Deploy to GitHub Pages
npm run deploy

Design Principles
💙 Blue tones — consistent with professional branding
✨ Minimalist & clean
📱 Fully responsive
🔤 Inter font throughout
⏳ Hourglass icon as logo
Content Updates
All site content is managed in a single file:
src/data/portfolioData.js

Edit this file to update experience, skills, projects, certifications, or any other section.

License
Code: MIT License — see LICENSE
Content: © Ali Baris Demirci. All rights reserved.
Built by Ali Baris Demirci