const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    message: 'Pixel Marketplace Backend',
    paypal: 'gitutudennis@gmail.com'
  });
});

app.get('/api/v1/products', (req, res) => {
  res.json({
    success: true,
    products: [
      { id: 1, name: "AI Marketing Suite", price: 249.99 },
      { id: 2, name: "Web Dev Course", price: 149.99 }
    ]
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
