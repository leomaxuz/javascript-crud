const connection = require('../config/dbConnection');

const Product = {
    getAllProducts: (callback) => {
        const query = 'SELECT * FROM products';
        connection.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    createProduct: (newProduct, callback) => {
        const query = 'INSERT INTO products SET ?';
        connection.query(query, newProduct, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }
    // Other CRUD methods (update, delete) can be added similarly.
};

module.exports = Product;
