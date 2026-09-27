# 🚀 Modern Software Developer Portfolio

A responsive, high-performance personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

Designed with a clean, dark navy/slate aesthetic, customizable teal/cyan & indigo accents, dark/light mode toggle with persistent state, smooth scrolling navigation, and modular architecture.

---

## ✨ Features & Sections

- **🌓 Dark / Light Mode**: Seamless theme switching with anti-FOUC script and local storage persistence.
- **⚡ Hero / Landing**:
  - Live availability badge (`Available for full-time opportunities`).
  - Animated title cycler (*Full Stack Developer*, *Software Engineer*, *Frontend Specialist*, *Cloud & DevOps Enthusiast*).
  - High-impact tagline & primary CTA buttons (*View My Work*, *Contact Me*).
  - Social media links (GitHub, LinkedIn, Email, Twitter/X).
  - Interactive developer manifest code card with syntax highlighting.
- **👤 About Me**:
  - 3 narrative paragraphs covering background, engineering philosophy, and current focus/hobbies.
  - Highlight stats cards (Years of experience, projects shipped, uptime reliability, code commits).
  - Personal interests & personality chips (Hiking, rapid chess, system design reading, coffee).
- **🛠️ Skills / Tech Stack**:
  - Grouped into 5 categorized cards:
    - **Languages**: JavaScript, TypeScript, Python, Java, C++, SQL
    - **Frontend**: React, Next.js, Tailwind CSS, HTML/CSS, Framer Motion, Redux/Zustand
    - **Backend**: Node.js, Express, Django, FastAPI, RESTful APIs, GraphQL, WebSockets
    - **Databases**: MongoDB, PostgreSQL, MySQL, Firebase, Redis
    - **DevOps & Tools**: Git, Docker, AWS, CI/CD (GitHub Actions), Linux, Vite
  - Interactive category filter tabs (*All*, *Languages*, *Frontend*, *Backend*, *Databases*, *DevOps*).
- **💼 Featured Projects**:
  - 6 realistic, production-grade project showcases:
    1. **CloudScale AI** — Enterprise Document Intelligence & RAG Pipeline
    2. **DevPulse** — Real-Time APM & Distributed Telemetry
    3. **Nexus Commerce** — Headless Storefront Suite
    4. **TaskFlow Pro** — Collaborative Agile Kanban Workspace
    5. **SecureVault** — Zero-Knowledge Cloud Storage & Encryption
    6. **AlgoVisualizer** — Interactive Data Structures & Algorithms Playground
  - Category filters (*All*, *Full Stack*, *Frontend*, *Backend / Cloud*).
  - Tech badges, impact metrics, live demo links, and GitHub repository links.
- **📈 Experience / Timeline**:
  - Chronological career timeline with glowing line and node indicators.
  - Roles, company names, dates, and locations.
  - Impact-driven bullet points with quantifiable metrics (e.g., *+42% LCP*, *500k+ daily transactions*, *88% test coverage*).
- **🎓 Education & Credentials**:
  - B.S. in Computer Science with GPA, honors, and coursework grid.
  - Industry certifications card (AWS, Meta, Docker).
- **📬 Interactive Contact Form & Details**:
  - Validated contact form (Name, Email, Subject, Message) with instant visual submission feedback.
  - Direct contact cards (Email, Location, Response time guarantee).
  - Downloadable resume / CV button.
- **📜 Reading Progress Bar & Footer**:
  - Gradient progress bar at the top of the viewport.
  - Sticky glassmorphic navbar with smooth scroll tracking.
  - Back-to-top button and social links.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Quick Start

### 1. Development Server
The development server is running at:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
To create an optimized production build:
```bash
npm run build
```
The compiled static assets will be output to the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customizing Your Content

All portfolio content (name, bio, skills, projects, experience, contact links, resume) is centralized in:
```
src/data/portfolioData.ts
```
Simply edit this file to update your information, add new projects, or modify your work history!
