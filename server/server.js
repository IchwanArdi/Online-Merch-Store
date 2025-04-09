const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load config .env
dotenv.config();

// Connect to MongoDB
connectDB();

// Middleware CORS (boleh akses dari lokal & online)
app.use(
  cors({
    origin: [process.env.CLIENT_URL, 'http://localhost:5173'],
    credentials: true,
  })
);

// Middleware tambahan
app.use(express.json()); // <--- agar bisa terima JSON dari frontend

// Gunakan route
const shopRoutes = require('./routes/shop');
const randomAllShopRoutes = require('./routes/randomAllShop');

// Routes setup
app.use('/shop', shopRoutes);
app.use('/randomAllShop', randomAllShopRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di port ${PORT}`);
});
