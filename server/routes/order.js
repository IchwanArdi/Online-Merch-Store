const express = require('express');
const router = express.Router();

// POST: Create dummy order untuk pop-up payment
router.post('/create', async (req, res) => {
  try {
    const { customerInfo, cartItems, totalAmount } = req.body;

    // Generate order number
    const orderNumber = 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase();

    // Simulasi order creation (dummy)
    const order = {
      orderNumber,
      customerInfo,
      items: cartItems,
      totalAmount,
      status: 'pending',
      createdAt: new Date(),
      paymentMethod: 'dummy_payment',
    };

    // Dalam implementasi nyata, simpan ke database
    // const newOrder = await Order.create(order);

    res.json({
      success: true,
      order,
      message: 'Order berhasil dibuat',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Gagal membuat order',
      error: err.message,
    });
  }
});

// GET: Get order details
router.get('/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;

    // Dalam implementasi nyata, ambil dari database
    // const order = await Order.findById(orderId);

    // Dummy response
    const order = {
      orderNumber: orderId,
      status: 'completed',
      message: 'Order ditemukan',
    };

    res.json(order);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil order',
      error: err.message,
    });
  }
});

module.exports = router;
