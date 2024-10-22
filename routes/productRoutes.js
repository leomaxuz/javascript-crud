const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// Get all products
router.get('/products', (req, res) => {
    Product.getAllProducts((err, products) => {
        if (err) {
            res.status(500).json({ error: 'Failed to retrieve products' });
        } else {
            res.json(products);
        }
    });
});

// Create new product
router.post('/products', (req, res) => {
    const newProduct = req.body;
    Product.createProduct(newProduct, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Failed to create product' });
        } else {
            res.json({ message: 'Product created', id: result.insertId });
        }
    });
});

module.exports = router;
