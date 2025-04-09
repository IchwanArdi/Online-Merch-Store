const mongoose = require('mongoose');

// Schema dan Model (Shop)
const ShopSchema = new mongoose.Schema(
  {
    nama: String,
    gambar: String,
    price: Number,
    stock: Number,
    new: Boolean,
  },
  { timestamps: true } // <--- Ini nambahin createdAt & updatedAt otomatis
);

const Shop = mongoose.model('Shop', ShopSchema);
module.exports = Shop;

// Tambahkan data baru ke database
// const project1 = new Shop({
//   nama: 'Off The Pier RGB Tee',
//   gambar: 'https://res.cloudinary.com/dxagnxs59/image/upload/v1744033040/6_nkogja.webp',
//   price: 31.99,
//   stock: 10,
//   new: false,
// });

// // Simpan data ke database
// project1
//   .save()
//   .then((result) => {
//     console.log('Project berhasil disimpan:', result);
//     mongoose.connection.close(); // Tutup koneksi setelah selesai
//   })
//   .catch((err) => {
//     console.error('Gagal menyimpan project ❌:', err);
//   });
