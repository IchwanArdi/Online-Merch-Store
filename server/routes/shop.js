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

// GET: Ambil semua produk
router.get('/allmerch', async (req, res) => {
  try {
    const latestProducts = await Shop.find();
    res.json(latestProducts);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil produk terbaru', error: err });
  }
});

// GET: Search produk berdasarkan keyword
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || q.trim() === '') {
      return res.json([]);
    }

    const searchResults = await Shop.find({
      $or: [{ nama: { $regex: q, $options: 'i' } }, { description: { $regex: q, $options: 'i' } }, { category: { $regex: q, $options: 'i' } }],
    }).limit(10);

    res.json(searchResults);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mencari produk', error: err });
  }
});

// GET: Ambil produk berdasarkan slug
router.get('/slug/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Shop.findOne({ slug });

    if (!product) {
      return res.status(404).json({ message: 'Produk tidak ditemukan' });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil produk', error: err });
  }
});

// POST: Validasi stock multiple products
router.post('/check-stock', async (req, res) => {
  try {
    const { items } = req.body; // Array of { productId, quantity }

    const stockValidation = [];

    for (const item of items) {
      const product = await Shop.findById(item.productId);
      if (!product) {
        stockValidation.push({
          productId: item.productId,
          available: false,
          message: 'Produk tidak ditemukan',
        });
        continue;
      }

      stockValidation.push({
        productId: item.productId,
        available: product.stock >= item.quantity,
        currentStock: product.stock,
        requestedQuantity: item.quantity,
        message: product.stock >= item.quantity ? 'Stock tersedia' : 'Stock tidak mencukupi',
      });
    }

    res.json({ validation: stockValidation });
  } catch (err) {
    res.status(500).json({ message: 'Gagal validasi stock', error: err });
  }
});

module.exports = router;
