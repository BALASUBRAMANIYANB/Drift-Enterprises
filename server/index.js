const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const getProducts = () => {
  const data = fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf8');
  return JSON.parse(data);
};

app.get('/api/products', (req, res) => {
  res.json(getProducts());
});

app.get('/api/products/:id', (req, res) => {
  const products = getProducts();
  const p = products.find((x) => x.id === req.params.id);
  if (!p) return res.status(404).json({ error: 'Product not found' });
  res.json(p);
});

app.listen(4000, () => {
  console.log('Server listening on http://localhost:4000');
});
