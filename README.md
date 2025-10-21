# 🛍️ Online Merch Store - Ichwan Ardi

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green.svg)](https://mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0.17-blue.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-purple.svg)](https://vitejs.dev/)

> **E-commerce platform modern** untuk toko merchandise Ichwan Ardi dengan fitur lengkap shopping cart, checkout, dan manajemen produk.

## 📋 Daftar Isi

- [✨ Fitur Utama](#-fitur-utama)
- [🛠️ Teknologi yang Digunakan](#️-teknologi-yang-digunakan)
- [📁 Struktur Project](#-struktur-project)
- [🚀 Instalasi & Setup](#-instalasi--setup)
- [📱 Halaman & Fitur](#-halaman--fitur)
- [🎨 Design System](#-design-system)
- [🔧 API Endpoints](#-api-endpoints)
- [📦 Deployment](#-deployment)
- [🤝 Kontribusi](#-kontribusi)

## ✨ Fitur Utama

### 🛒 **E-commerce Core Features**

- **Product Catalog** - Katalog produk dengan kategori dan filter
- **Shopping Cart** - Keranjang belanja dengan real-time updates
- **Checkout System** - Proses checkout yang lengkap dan aman
- **Product Search** - Pencarian produk dengan autocomplete
- **Product Details** - Halaman detail produk dengan galeri gambar

### 🎨 **User Experience**

- **Responsive Design** - Mobile-first approach
- **Modern UI/UX** - Clean dan professional design
- **Smooth Animations** - AOS animations dan transitions
- **Loading States** - Loading indicators untuk better UX
- **Error Handling** - Comprehensive error management

### 🔧 **Technical Features**

- **State Management** - React Context untuk cart state
- **Routing** - React Router untuk SPA navigation
- **API Integration** - RESTful API dengan Express.js
- **Database** - MongoDB dengan Mongoose ODM
- **Real-time Updates** - Live cart updates

## 🛠️ Teknologi yang Digunakan

### **Frontend**

- **React 19.0.0** - UI Library
- **React Router DOM 7.5.0** - Client-side routing
- **Tailwind CSS 4.0.17** - Utility-first CSS framework
- **Vite 6.2.0** - Build tool dan dev server
- **AOS 2.3.4** - Animate On Scroll library
- **Framer Motion 12.6.5** - Animation library
- **Axios 1.8.4** - HTTP client

### **Backend**

- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.3.4** - MongoDB ODM
- **CORS 2.8.5** - Cross-origin resource sharing
- **dotenv 16.4.7** - Environment variables

### **Development Tools**

- **ESLint** - Code linting
- **Nodemon** - Development server
- **Git** - Version control

## 📁 Struktur Project

```
Online-Merch-Store/
├── client/                 # Frontend React App
│   ├── src/
│   │   ├── components/    # React Components
│   │   │   ├── Header/    # Navigation & Search
│   │   │   ├── Product/   # Product pages
│   │   │   ├── Checkout/  # Checkout system
│   │   │   ├── Collections/ # Product collections
│   │   │   └── UI/        # Reusable UI components
│   │   ├── context/       # React Context (Cart)
│   │   ├── utils/         # Utility functions
│   │   └── assets/        # Images & static files
│   ├── public/           # Static assets
│   └── package.json      # Frontend dependencies
├── server/               # Backend Node.js App
│   ├── config/          # Database configuration
│   ├── model/           # MongoDB schemas
│   ├── routes/          # API routes
│   └── package.json     # Backend dependencies
└── README.md           # Project documentation
```

## 🚀 Instalasi & Setup

### **Prerequisites**

- Node.js (v16 atau lebih baru)
- MongoDB (local atau cloud)
- Git

### **1. Clone Repository**

```bash
git clone https://github.com/IchwanArdi/Online-Merch-Store.git
cd Online-Merch-Store
```

### **2. Setup Backend**

```bash
cd server
npm install
```

**Buat file `.env` di folder server:**

```env
MONGODB_URI=mongodb://localhost:27017/online-merch-store
CLIENT_URL=http://localhost:5173
PORT=5000
```

**Jalankan server:**

```bash
npm run dev
```

### **3. Setup Frontend**

```bash
cd client
npm install
```

**Jalankan development server:**

```bash
npm run dev
```

### **4. Akses Aplikasi**

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 📱 Halaman & Fitur

### **🏠 Homepage**

- Hero carousel dengan banner promosi
- Product collections
- Featured products
- Information banner

### **🛍️ Product Pages**

- **Product List** - Semua produk dengan filter
- **Product Detail** - Detail produk dengan galeri
- **Collections** - Kategori produk
- **Search** - Pencarian produk real-time

### **🛒 Shopping Cart**

- **Cart Sidebar** - Slide-out cart dengan overlay
- **Add to Cart** - Dengan size dan color selection
- **Quantity Management** - Update jumlah item
- **Remove Items** - Hapus item dari cart

### **💳 Checkout**

- **Checkout Page** - Halaman checkout dedicated
- **Form Validation** - Validasi data pengiriman
- **Order Summary** - Ringkasan pesanan
- **Success Modal** - Konfirmasi pembayaran

### **🔍 Search & Navigation**

- **Global Search** - Pencarian dengan autocomplete
- **Category Filter** - Filter berdasarkan kategori
- **Responsive Menu** - Mobile-friendly navigation

## 🎨 Design System

### **Color Palette**

- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)
- **Neutral**: Gray scale

### **Typography**

- **Font Family**: Merriweather (Google Fonts)
- **Headings**: Bold, gradient text
- **Body**: Regular weight
- **Responsive**: Mobile-first typography

### **Components**

- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Gradient backgrounds, hover effects
- **Forms**: Clean inputs dengan validation states
- **Modals**: Glassmorphism effects
- **Animations**: Smooth transitions

## 🔧 API Endpoints

### **Products**

```http
GET    /shop              # Get all products
GET    /shop/search?q=    # Search products
GET    /shop/:id          # Get product by ID
```

### **Random Products**

```http
GET    /randomAllShop     # Get random products
```

### **Orders**

```http
POST   /order             # Create new order
GET    /order/:id         # Get order by ID
```

## 📦 Deployment

### **Frontend (Vercel)**

```bash
cd client
npm run build
# Deploy to Vercel
```

### **Backend (Railway)**

```bash
cd server
# Deploy to Railway
```

### **Database (MongoDB Atlas)**

- Setup MongoDB Atlas cluster
- Update connection string di `.env`

## 🚀 Live Demo

- **Website**: [https://ichwanmerch.vercel.app/](https://ichwanmerch.vercel.app/)
- **API**: [https://online-merch-store-production.up.railway.app/](https://online-merch-store-production.up.railway.app/)

## 🤝 Kontribusi

1. Fork repository ini
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**Ichwan Ardi**

- GitHub: [@IchwanArdi](https://github.com/IchwanArdi)
- Website: [https://ichwanmerch.vercel.app/](https://ichwanmerch.vercel.app/)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [MongoDB](https://mongodb.com/) - Database
- [Railway](https://railway.app/) - Backend Hosting
- [Vercel](https://vercel.com/) - Frontend Hosting

---

⭐ **Jika project ini membantu, jangan lupa berikan star!** ⭐
