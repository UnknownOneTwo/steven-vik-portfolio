# 💼 Steven J. Vik – Epic Resume Portfolio

> **Version:** 2.1.0 · Built with Next.js 14 · Tailwind CSS 3.4+ · React 18 · Deployed with 🔐 Security Best Practices

---

## 🌐 Live Preview
📎 [View on GitHub Pages](https://unknownonetwo.github.io/steven-vik-portfolio/) *(optional)*

---

## 🧠 About This Project
A professional portfolio site built from scratch to showcase my work in cybersecurity, infrastructure automation, and systems architecture.

Includes advanced features like:
- Interactive project filtering
- Secure contact form (EmailJS + rate-limiting)
- Animated components (Framer Motion)
- Fully responsive layout
- Production-ready error handling & logging

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/UnknownOneTwo/steven-vik-portfolio.git
cd steven-vik-portfolio

# Install dependencies
npm install

# Start local dev server
npm run dev
```

---

## 📁 Folder Structure
```
.
├── components/          # Reusable UI components
│   ├── Hero.js
│   ├── Nav.js
│   ├── AboutAndCareer.js
│   ├── ProjectGrid.js
│   ├── ContactForm.js
│   └── FooterIcons.js
├── pages/               # App pages
│   ├── index.js         # Homepage
│   ├── _app.js          # Global wrapper
│   └── api/contact.js   # API for contact form
├── public/              # Static assets
│   ├── profile.jpg
│   ├── resume.pdf
│   └── favicon.ico
├── styles/globals.css   # Global styles
├── tailwind.config.js   # Tailwind theme config
├── utils/debug.js       # Logging utils
└── package.json         # Project metadata and scripts
```

---

## 🔒 Security & Resilience
- Rate-limited contact API to prevent spam (in-memory throttle)
- Client-side and server-side validation for EmailJS
- Error boundaries and global exception logging
- Secure content delivery best practices (headers, no unsafe content)

---

## 🛠️ Tech Stack
- **Next.js 14** – Full-stack React framework
- **Tailwind CSS 3.4** – Utility-first styling
- **Framer Motion** – Animations
- **EmailJS** – Contact form backend
- **React Error Boundary** – Crash protection
- **GitHub CLI** – Auto-publish workflows

---

## 📚 Projects Showcase
Each project is tagged, filterable, and categorized.

| Project                     | Category       | Tech                          | Status           |
|----------------------------|----------------|-------------------------------|------------------|
| LabOS DevOps Toolkit       | Automation     | Python, PowerShell, Proxmox   | 🟢 Active Dev     |
| LabOS Templates            | Infrastructure | YAML, Markdown, Docs          | ✅ Maintained     |
| ObsidianVault System       | Automation     | Obsidian, Git, Markdown       | 🔒 Private        |
| Security Monitoring Dash   | Security       | Grafana, Prometheus           | 🧪 In Development |
| Automated Backup System    | Infrastructure | Python, Proxmox, ZFS          | ✅ Prod Ready     |
| Network Security Scanner   | Security       | Python, Networking            | 🧪 Beta Testing   |

---

## 📄 Resume Highlights
- 10+ years in systems architecture & IT infrastructure
- Currently transitioning into **Cybersecurity Engineering**
- Proficient in **DevOps**, **automation**, **monitoring**, and **threat detection**
- Projects built on real homelab deployments (Proxmox, Docker, InfluxDB)
- Ongoing contributor to open-source automation tools

---

## 🔗 Related Repos
- [lab-os](https://github.com/UnknownOneTwo/lab-os)
- [lab-os-templates](https://github.com/UnknownOneTwo/lab-os-templates)

---

## 📜 License
[MIT](https://choosealicense.com/licenses/mit/)

Built with ❤️ by Steven J. Vik — UnknownOneTwo
