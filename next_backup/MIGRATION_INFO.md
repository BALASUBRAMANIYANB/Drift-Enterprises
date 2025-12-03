# Next.js Backup (Archived)

This folder contains the original Next.js application files before migration to React + Vite.

## Contents
- `src/app/` - Next.js app directory structure
- `package.json` - Original Next.js dependencies
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - Original TypeScript config
- `eslint.config.mjs` - Original ESLint configuration

## Migration Date
December 3, 2025

## Original Structure
```
src/app/
├── page.tsx (home page)
├── layout.tsx (root layout)
├── globals.css (global styles)
├── page.module.css (home page module styles)
├── cart/page.tsx
├── checkout/page.tsx
├── products/page.tsx
├── products/[id]/page.tsx
├── orders/page.tsx
├── account/page.tsx
├── components/
│   ├── CartProvider.tsx
│   └── Header.tsx
├── data/
│   └── products.ts
└── favicon.ico
```

## Why This Backup?
The application was migrated from Next.js to a pure React app using Vite for the following reasons:
- Simpler build toolchain
- Faster development server
- Full client-side control
- Easier deployment

## Data Preservation
All product data, cart context, and styling have been ported to the new React app. No data was lost during migration.

## If You Need to Revert
The original Next.js setup can be restored from this backup. Contact the development team for instructions.
