# GraphixMart

An e-commerce store for GPUs built with Next.js, Prisma, and Stripe. Users can browse products, read news, get driver support, and checkout securely.

## Stack

- Next.js 16 (App Router)
- PostgreSQL + Prisma ORM
- NextAuth for authentication
- Stripe for payments
- Tailwind CSS

## Getting Started

Copy `.env.example` to `.env` and fill in your credentials, then:

```bash
npm install
npx prisma migrate dev
npm run seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

```
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

## Project Structure

```
app/
  page.tsx          # homepage with news slider
  products/         # product listing and detail pages
  auth/             # login / register
  drivers/          # GPU driver lookup
  news/             # news articles
  support/          # support ticket form
  api/              # API routes (auth, checkout, support)
components/         # Navbar, Footer, ProductCard, NewsSlider
lib/                # prisma, auth, stripe clients
prisma/             # schema and seed data
types/              # shared TypeScript types
```
