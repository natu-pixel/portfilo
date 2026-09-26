This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## About profile views

The About section opens on **Why choose me**, a proof-driven introduction to NAT Entertainment, Qeero, and the explicitly in-progress Shega project. **Level Up** and **Full Chronology** remain available as alternative profile views.

Each project has a live-site or preview link. **Explore the case studies** scrolls to the existing project collection, while **Start a conversation by email** opens an email addressed to `info@natentertainment.org`. The email link does not use or change the contact form's submission behavior.

The view content and controls live in [StoryArcSwitcher](components/StoryArcSwitcher.tsx), embedded by [About](components/About.tsx). Keep project descriptions and development-status labels consistent with [Projects](components/Projects.tsx); do not add unsupported outcome metrics.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
