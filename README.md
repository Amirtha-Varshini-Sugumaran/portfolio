# Amirtha Varshini Sugumaran Portfolio

A modern, recruiter-focused personal portfolio for **Amirtha Varshini Sugumaran**, positioned for Java Junior Software Engineer, Backend Developer, Graduate Software Engineer, Full Stack Engineer, Technical Analyst and Business Systems Analyst opportunities in Ireland.

The site is built as a polished single-page Next.js portfolio with structured content, reusable components, responsive layouts, subtle Framer Motion animation and deployment-ready metadata.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Inter and JetBrains Mono via Google Fonts

## Portfolio Focus

- Java-oriented junior software engineering positioning
- Backend systems, REST APIs and relational database workflows
- PostgreSQL schema design, query optimisation and RBAC exposure
- Frontend integration and full-stack collaboration
- Business analytics, stakeholder communication and structured delivery

## Folder Structure

```text
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── AnimatedSection.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── SectionHeading.tsx
│   └── Skills.tsx
├── data/
│   └── portfolio.ts
├── lib/
│   └── utils.ts
├── public/
│   ├── Amirtha-Varshini-Sugumaran-CV.pdf
│   ├── favicon.svg
│   └── og-image.svg
├── tailwind.config.ts
└── README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev      # Start the local development server
npm run build    # Create a production build
npm run start    # Run the production build locally
npm run lint     # Run Next.js linting
```

## Deployment

The project is ready for Vercel deployment.

1. Push the repository to GitHub.
2. Import the `portfolio` repository in Vercel.
3. Keep the default Next.js build settings.
4. Deploy.

## Customization Notes

- Update portfolio content in `data/portfolio.ts`.
- Replace `public/Amirtha-Varshini-Sugumaran-CV.pdf` with the final resume PDF.
- Replace placeholder project links (`#`) with live GitHub repositories or deployed demos when available.
- Update `metadataBase` in `app/layout.tsx` after the final Vercel domain is available.
