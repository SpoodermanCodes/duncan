# Duncan

Duncan is a GPU e-commerce store built with Next.js. It lets users browse and buy graphics cards, read hardware news, look up GPU drivers, compare specs, and submit support tickets. The whole thing runs on a PostgreSQL database with Prisma as the ORM, NextAuth for authentication, and Stripe handling payments.

The design is dark-themed with a green and cyan color scheme, built entirely with Tailwind CSS.

---

## What the app does

- Homepage with a news slider showing the latest GPU/hardware articles
- Product listing page with all available GPUs pulled from the database
- Individual product pages with specs and a buy button that goes through Stripe checkout
- Login and signup with username/password authentication (JWT sessions)
- Drivers page where you can look up and download drivers for specific GPUs, and compare two GPUs side by side
- News page with full articles
- Support ticket form where users can describe their GPU issue and submit a ticket (saved to the database)

---

## Tech stack

- Next.js 16 (App Router)
- PostgreSQL + Prisma ORM
- NextAuth v4 (credentials provider, JWT sessions)
- Stripe (checkout sessions)
- Tailwind CSS v4
- TypeScript
- bcryptjs for password hashing
- ts-node for running the seed script

---

## Prerequisites

Before you start, make sure you have:

- Node.js 18 or higher
- A PostgreSQL database (local or hosted, e.g. Supabase, Neon, Railway)
- A Stripe account (free to create, you just need the API keys)

---

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/SpoodermanCodes/duncan.git
cd duncan
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project and fill in the following:

```
DATABASE_URL=postgresql://user:password@host:5432/dbname
NEXTAUTH_SECRET=any_random_string_you_want
NEXTAUTH_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
```

- `DATABASE_URL` is your PostgreSQL connection string
- `NEXTAUTH_SECRET` can be anything, just make it long and random. You can run `openssl rand -base64 32` to generate one
- `NEXTAUTH_URL` should be `http://localhost:3000` for local development
- Stripe keys are found in your Stripe dashboard under Developers > API keys. Use the test keys while developing

### 4. Run database migrations

This creates all the tables in your database:

```bash
npx prisma migrate dev
```

### 5. Seed the database

This populates the database with 12 GPU products and 4 news articles so the app has something to show:

```bash
npm run seed
```

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and the app should be running.

---

## Project structure

```
app/
  page.tsx              # homepage with news slider
  products/
    page.tsx            # all products listing
    [id]/page.tsx       # individual product page
    [id]/BuyButton.tsx  # stripe checkout button (client component)
  auth/page.tsx         # login and signup
  drivers/page.tsx      # driver lookup and GPU comparison tool
  news/
    page.tsx            # all news articles
    [id]/page.tsx       # individual article
  support/page.tsx      # support ticket form
  api/
    auth/               # nextauth handler + register endpoint
    checkout/           # stripe checkout session creation
    support/            # support ticket submission
components/
  Navbar.tsx
  Footer.tsx
  ProductCard.tsx
  NewsSlider.tsx
lib/
  prisma.ts             # prisma client
  auth.ts               # nextauth config
  stripe.ts             # stripe client
prisma/
  schema.prisma         # database models
  seed.ts               # seed script
types/
  index.ts              # shared typescript types
```

---

## Notes

- The `.env` file is gitignored and should never be committed. Anyone cloning this repo needs to create their own `.env` with their own credentials.
- Stripe is set up to use test mode by default. Use Stripe's test card `4242 4242 4242 4242` with any future expiry and any CVC to test checkout.
- The drivers page only has data for a few GPUs (RTX 4060 Ti, RTX 4070 Ti Super, RX 7700 XT) since it's hardcoded. It's not pulling from the database.
- Support tickets are saved to the database but there's no admin panel to view them yet. You'd need to query the database directly or build one.
- The news articles in the seed are real articles pulled from Tom's Hardware for demo purposes.

---

## Notes for self

- The Stripe product IDs (`stripeId` on the Product model) are optional right now. If you want to link products to actual Stripe products in the dashboard, you'd populate that field and use it in the checkout route instead of creating ad-hoc line items.
- NextAuth is on v4, not v5. Don't upgrade without checking the breaking changes, the config structure is completely different in v5.
- The drivers page GPU list is hardcoded in the component itself. If you want to expand it, either move it to the database or at least pull it into a separate data file.
- There's no order history page yet. The Order model exists in the schema and orders are being created after successful Stripe payment, but there's no UI to show a user their past orders.
- If you deploy this, change `NEXTAUTH_URL` to your actual domain and swap the Stripe test keys for live keys.
