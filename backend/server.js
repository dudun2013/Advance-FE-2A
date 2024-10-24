const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint untuk mengirim gambar (dengan base64)
app.get('https://670f26663e7151861656b4ca.mockapi.io/images/users', (req, res) => {
  // Path ke file gambar
  const imagePath = path.join(__dirname, 'your-image.jpg'); // Ubah ke path gambar kamu
  const fs = require('fs');

  // Baca file gambar dan kirimkan dalam bentuk base64
  fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading image file' });
    } else {
      const base64Image = Buffer.from(data).toString('base64');
      res.json({
        image_data: base64Image,
        description: "This is an example image"
      });
    }
  });
});

// Jalankan server di port yang ditentukan
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
