const mongoose = require('mongoose');

// Schema dan Model (AllShop)
const AllShopSchema = new mongoose.Schema({
  nama: String,
  gambar: String,
  price: Number,
  stock: Number,
  new: Boolean,
});

const AllShop = mongoose.model('AllShop', AllShopSchema); // ✅ Ini harus ada
module.exports = AllShop;

// Tambahkan data baru ke database
// const project1 = new AllShop({
//   nama: 'Straight Edge X Beanie (Sand)',
//   gambar: 'https://res.cloudinary.com/dxagnxs59/image/upload/v1744035838/IMG_9450_6562255f-07a5-4d13-ae44-73936f81a50e_360x_bbqgsd.webp',
//   price: 41.99,
//   stock: 0,
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
