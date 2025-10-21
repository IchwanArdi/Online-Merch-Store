const mongoose = require('mongoose');

// Schema dan Model (Shop)
const ShopSchema = new mongoose.Schema(
  {
    nama: String,
    slug: { type: String, unique: true, sparse: true },
    gambar: String,
    images: [String], // Array untuk multiple images
    price: Number,
    stock: Number,
    new: Boolean,
    description: String,
    category: String,
    sizes: [String], // Array untuk available sizes
    colors: [String], // Array untuk available colors
  },
  { timestamps: true } // <--- Ini nambahin createdAt & updatedAt otomatis
);

// Index untuk search performance
ShopSchema.index({ nama: 'text', description: 'text', category: 'text' });

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
