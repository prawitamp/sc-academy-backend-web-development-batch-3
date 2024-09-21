import express from "express";

const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).json({
    name: "Prawita",
    nickname: "praw",
  });
});
router.get("/book", (req, res) => {
  res.status(200).json({
    daftarBukuBacaan: {
      statusCode: 200,
      judulBuku: "Atomic Habits",
      author: "James Clear",
    },
  });
});

// TUGAS: ketika aplikasi di GET, akan menghasilkan sebuah numerasi perkalian / operasi matematika
// Buatlah sebuah operasi matematika ketika route 'operasi-matematika' di akses lakukan operasi matematika seperti penjumlahan, pengurangan, pembagian, dan perkalian

export default router;
