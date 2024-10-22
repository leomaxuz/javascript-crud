const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', productRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
