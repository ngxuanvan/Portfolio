# Nguyen Xuan Van Portfolio

Personal portfolio website for Nguyen Xuan Van, focused on presenting education, business analysis direction, selected projects, skills, and contact information in a polished single-page experience.

## Live Website

[https://portfolio-xuanvan.vercel.app/](https://portfolio-xuanvan.vercel.app/)

## Overview

This project is built as a modern portfolio landing page with:

- A hero section introducing Nguyen Xuan Van and current career direction
- An about section covering education, background, and personal journey
- A projects section with case-study style summaries
- A skills section for current capabilities and learning focus
- A contact section with email, phone, LinkedIn, GitHub, and resume access
- Smooth scrolling and animated UI transitions

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lenis
- Lucide React
- Vercel

## Getting Started

### Requirements

- Node.js 20+ recommended
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Certificates.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── SmoothScroll.tsx
│   └── ui/
├── hooks/
├── public/
│   ├── atulfullstackresume.pdf
│   └── ...
├── package.json
└── README.md
```

## Main Sections

- `Hero`: introduction, short summary, and quick links
- `About`: academic background, achievements, and career journey
- `Projects`: selected work with problem, approach, and impact
- `Skills`: technologies and focus areas
- `Contact`: direct contact methods and resume link
- `Footer`: social links and closing section

## Assets

Static assets are stored in `public/`, including:

- Resume PDF
- School logos
- Personal/project images

## Contact

- Email: [nguyenxuanvan.work@gmail.com](mailto:nguyenxuanvan.work@gmail.com)
- LinkedIn: [https://www.linkedin.com/in/xuanvan/](https://www.linkedin.com/in/xuanvan/)
- GitHub: [https://github.com/ngxuanvan](https://github.com/ngxuanvan)

## Deployment

This site is suitable for deployment on Vercel and is currently published at:

[https://portfolio-xuanvan.vercel.app/](https://portfolio-xuanvan.vercel.app/)
