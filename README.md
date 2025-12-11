# 🚀 DRIFT ENERPRISES

A modern, fully responsive e-commerce platform built with React and Firebase, offering a seamless shopping experience across all devices.

![DRIFT ENERPRISES](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-18-blue)
![Firebase](https://img.shields.io/badge/Firebase-Realtime%20DB-orange)
![Responsive](https://img.shields.io/badge/Design-Fully%20Responsive-green)

## ✨ Features

### Customer Features
- 🛍️ **Full E-Commerce Functionality** - Browse, search, cart, and checkout system
- 📱 **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🔍 **Advanced Search** - Real-time product search by title, brand, and description
- ⭐ **Product Reviews** - Read and write product reviews with ratings
- 🛒 **Smart Shopping Cart** - Real-time updates with tax calculations (18% GST)
- 💳 **Secure Checkout** - Saved addresses, multiple payment methods (COD, Razorpay ready)
- 📦 **Order Management** - Place, track, and cancel orders with real-time status updates
- 🔐 **User Authentication** - Secure login/signup with Firebase Auth

### Admin Dashboard (11 Pages - 100% Live Data)
- 📊 **Dashboard** - Real-time stats (sales, products, customers, orders)
- 🎨 **Homepage Manager** - Manage banners and homepage content
- 📦 **Product Management** - Complete CRUD operations with image uploads
- 📈 **Stock Management** - Track inventory with low-stock alerts
- 💹 **Analytics** - Real revenue calculations and category performance
- 🛒 **Order Management** - View all orders with workflow status (pending → shipped → delivered)
- 👥 **Customer Management** - User management and role control
- ⭐ **Reviews Management** - Approve/reject reviews with admin replies
- 💰 **Revenue Management** - Detailed revenue reports with tax calculations
- 🔍 **Activity Logs** - Audit trail of all admin actions
- ⚙️ **Settings** - Site configuration and shipping settings

### Technical Features
- 🔥 **Real-Time Firebase Integration** - All data synced live from Firebase
- ✅ **Form Validation** - Email, phone, pincode, and required field validation
- 📊 **Error Handling** - Error boundaries and proper error messages
- ⚡ **Loading States** - Loading indicators on all data-fetching pages
- 🎨 **Modern UI/UX** - Beautiful design with gradients and animations
- 📱 **Mobile Responsive** - Fully optimized for all screen sizes

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router v6, Hooks (useState, useEffect, useContext, useMemo)
- **Build Tool**: Vite
- **Backend**: Firebase Realtime Database & Authentication
- **Styling**: Custom CSS with responsive design, gradients, and animations
- **State Management**: React Context API (AuthContext, CartProvider)
- **Storage**: LocalStorage for cart persistence, Firebase for all data
- **Validation**: Custom validation functions for forms
- **Error Handling**: Error Boundaries, try-catch blocks, user-friendly messages

## 🔥 Firebase Collections

The application uses the following Firebase Realtime Database collections:

- **orders/** - Customer orders with items, status, and shipping address
- **products/** - Product catalog with pricing, stock, and images
- **users/** - Customer and admin accounts with roles
- **reviews/** - Product reviews with ratings and approval status
- **banners/** - Homepage promotional banners
- **categories/** - Product categories and subcategories
- **activityLogs/** - Admin activity audit trail
- **settings/** - Site configuration and settings

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/HARSHAN-DEVHUB/Drift.git
cd Drift
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a Firebase project at [Firebase Console](https://console.firebase.google.com/) and update `src/config/firebase.js` with your credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### 5. Build for Production

```bash
npm run build
npm run preview
```

## 👨‍💼 Admin Access

To access the admin dashboard with all 11 pages:

1. Navigate to `/login`
2. Sign in with admin credentials (role: 'admin' in Firebase)
3. You'll be redirected to `/admin` dashboard
4. Access all admin pages from the sidebar navigation

**Admin Pages Available:**
- Dashboard - Real-time statistics
- Homepage Manager - Manage banners
- Product Management - Add/edit/delete products
- Stock Management - Inventory tracking
- Analytics - Business metrics and insights
- Order Management - Order workflow control
- Customer Management - User management
- Reviews Management - Content moderation
- Revenue Management - Financial reports
- Activity Logs - Audit trail
- Settings - Site configuration

**To Create an Admin Account:**
1. Create a new user in Firebase Authentication
2. In Firebase Realtime Database, add the user with `role: "admin"`
3. Login with those credentials

## 📁 Project Structure

```
Drift/
├── public/
│   └── assets/          # Images and static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx               # Navigation header with search
│   │   ├── AdminLayout.jsx          # Admin page container
│   │   ├── AdminSidebar.jsx         # Admin navigation menu
│   │   ├── CartProvider.jsx         # Cart state management
│   │   ├── ErrorBoundary.jsx        # Error handling
│   │   └── ProtectedRoute.jsx       # Route protection
│   ├── config/
│   │   └── firebase.js              # Firebase configuration
│   ├── contexts/
│   │   ├── AuthContext.jsx          # Authentication context
│   │   └── (CartProvider in components)
│   ├── pages/
│   │   ├── Home.jsx                 # Homepage with products
│   │   ├── Products.jsx             # Products listing with search
│   │   ├── ProductDetail.jsx        # Product detail with reviews
│   │   ├── Cart.jsx                 # Shopping cart
│   │   ├── Checkout.jsx             # Order checkout
│   │   ├── Orders.jsx               # Customer order history
│   │   ├── Login.jsx                # Authentication page
│   │   ├── Account.jsx              # User account page
│   │   ├── AdminDashboard.jsx       # Admin dashboard
│   │   ├── HomePageManager.jsx      # Banner management
│   │   ├── ProductManagement.jsx    # Product CRUD
│   │   ├── StockManagement.jsx      # Inventory management
│   │   ├── OrderManagement.jsx      # Order management
│   │   ├── CustomerManagement.jsx   # Customer management
│   │   ├── ReviewsManagement.jsx    # Review moderation
│   │   ├── Analytics.jsx            # Analytics dashboard
│   │   ├── RevenueManagement.jsx    # Revenue reports
│   │   ├── ActivityLogs.jsx         # Activity logs
│   │   └── AdminSettings.jsx        # Settings page
│   ├── services/
│   │   ├── productService.js        # Product operations
│   │   └── bannerService.js         # Banner operations
│   ├── styles/
│   │   ├── index.css                # Global styles
│   │   ├── AdminDashboard.css       # Admin page styles
│   │   └── [other component styles]
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Entry point
│   └── App.styles.js
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Key Features Breakdown

### Customer Shopping Experience
- **Product Browse & Search** - Real-time search across title, brand, and description
- **Product Details** - Detailed product pages with images and reviews
- **Product Reviews** - Read customer reviews, write and submit new reviews
- **Shopping Cart** - Add/remove items, adjust quantities, real-time total calculation
- **Checkout** - Select saved addresses, payment method (COD/Razorpay ready), form validation
- **Order Placement** - Real orders saved to Firebase, automatic stock deduction
- **Order Tracking** - View all orders with real-time status updates
- **Order Cancellation** - Cancel pending orders with confirmation

### Admin Control & Analytics
- **Real-Time Dashboard** - Live stats from Firebase (sales, products, customers, orders)
- **Product Management** - Add, edit, delete products with multi-image upload
- **Stock Management** - Track inventory with low-stock alerts and bulk updates
- **Order Management** - Complete order lifecycle with workflow enforcement
- **Customer Management** - View/manage users and assign roles
- **Reviews Moderation** - Approve/reject reviews and add admin replies
- **Analytics Reports** - Revenue calculations, category performance, top products
- **Activity Logs** - Complete audit trail of all admin actions
- **Revenue Management** - Detailed financial reports with 18% GST calculations
- **Homepage Management** - Create and manage promotional banners
- **Site Settings** - Configure site information, shipping, and payment options

### Data & Security
- **Real-Time Firebase** - All data synced live (no hardcoded values)
- **Form Validation** - Email, phone (10 digits), pincode (6 digits), required fields
- **Error Boundaries** - Catches React errors with fallback UI
- **Loading States** - Loading indicators on all data-fetching pages
- **Error Handling** - Try-catch blocks with user-friendly error messages
- **Authentication** - Firebase Auth with role-based access control
- **Admin-Only Routes** - Protected admin pages require admin role

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Laptop**: 1024px - 1200px
- **Tablet**: 768px - 1024px
- **Mobile**: 480px - 768px
- **Small Mobile**: 360px - 480px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**HARSHAN-DEVHUB**
- GitHub: [@HARSHAN-DEVHUB](https://github.com/HARSHAN-DEVHUB)

## 🙏 Acknowledgments

- Firebase for backend services
- React community for excellent documentation
- Vite for blazing fast development experience

---

Made with ❤️ by HARSHAN-DEVHUB
