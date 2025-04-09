// api.js atau index.js atau routes/shop.js
const express = require('express');
const router = express.Router();
const Shop = require('../model/Shop');

// GET: Ambil 5 produk terbaru
router.get('/', async (req, res) => {
  try {
    const latestProducts = await Shop.find().sort({ createdAt: -1 }).limit(5);
    res.json(latestProducts);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil produk terbaru', error: err });
  }
});

module.exports = router;
