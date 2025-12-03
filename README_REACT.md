# DRIFT ENTERPRISES - React Ecommerce App

A modern, full-stack ecommerce application built with **React 18** and **Vite**, featuring an Amazon-inspired user interface with complete shopping cart and checkout functionality.

## Features

- Product Catalog - Browse featured and all products with detailed information
- Product Details - View product images, descriptions, ratings, and pricing
- Shopping Cart - Add/remove items, adjust quantities with persistent localStorage
- Checkout - Multi-step checkout with order summary
- Order History - Track placed orders with order ID and timestamps
- Responsive Design - Fully responsive UI that works on desktop, tablet, and mobile
- State Management - React Context API for cart and order management
- Client-Side Routing - React Router v6 for seamless page navigation

## Tech Stack

- **Frontend**: React 18.2, React Router DOM 6
- **Build Tool**: Vite 5
- **Styling**: CSS3 with responsive grid layouts
- **State Management**: React Context API + localStorage
- **Node**: v18+ recommended

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Steps

1. Install dependencies:
```
npm install
```

2. Start development server:
```
npm run dev
```

The app will open at http://localhost:3000

3. Build for production:
```
npm run build
npm run preview
```

## Available Scripts

- npm run dev - Start dev server (Vite) on port 3000
- npm run build - Build optimized production bundle
- npm run preview - Preview production build locally

## Project Structure

```
src/
├── main.jsx              # React entry point
├── App.jsx               # Main app component with routes
├── index.css             # Global styles
├── components/
│   ├── CartProvider.jsx  # Cart context and logic
│   └── Header.jsx        # Navigation header
├── pages/
│   ├── Home.jsx          # Homepage
│   ├── Products.jsx      # Products listing
│   ├── ProductDetail.jsx # Product detail page
│   ├── Cart.jsx          # Shopping cart
│   └── Checkout.jsx      # Checkout page
└── data/
    └── products.js       # Product data

vite.config.js            # Vite configuration
package.json              # Dependencies
index.html                # HTML entry point
```

## Routes

- / - Homepage with featured products
- /products - All products grid
- /products/:id - Individual product page
- /cart - Shopping cart
- /checkout - Order checkout

## Data Persistence

- Cart: Stored in localStorage under `drift_enterprises_cart`
- Orders: Stored in localStorage under `drift_enterprises_orders`

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile 80+

## Migration Note

This application was migrated from Next.js to React + Vite on December 3, 2025. All product data, styling, and functionality have been preserved. Original Next.js files are backed up in the `next_backup/` folder.

## Support

For issues, refer to:
- React Documentation: https://react.dev
- Vite Guide: https://vitejs.dev
- React Router: https://reactrouter.com

---

Last Updated: December 3, 2025
Version: 0.1.0 (React)
