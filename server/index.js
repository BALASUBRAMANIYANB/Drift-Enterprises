const express = require('express');
const cors = require('cors');
const path = require('path');
const products = require('./data/products.json');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const p = products.find((x) => x.id === req.params.id);
  if (!p) return res.status(404).json({ error: 'Product not found' });
  res.json(p);
});

app.listen(4000, () => {
  console.log('Server listening on http://localhost:4000');
});
