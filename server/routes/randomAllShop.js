const express = require('express');
const router = express.Router();
const AllShop = require('../model/AllShop');

// GET: Ambil 8 produk terbaru
router.get('/', async (req, res) => {
  try {
    const latestProducts = await AllShop.find().sort({ createdAt: -1 }).limit(8);
    res.json(latestProducts);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil produk terbaru', error: err });
  }
});

// GET: Ambil semua produk
router.get('/allproduct', async (req, res) => {
  try {
    const latestProducts = await AllShop.find();
    res.json(latestProducts);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil produk terbaru', error: err });
  }
});

module.exports = router;
