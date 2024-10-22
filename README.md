
# JavaScript CRUD Application with MySQL

This project demonstrates how to create a basic CRUD (Create, Read, Update, Delete) application using JavaScript (Node.js, Express) with a MySQL database backend.

## Features
- Perform CRUD operations on product data.
- Uses Express for routing and MySQL for database storage.
- Easily extendable for larger applications.

## Technologies Used
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js to handle HTTP requests.
- **MySQL**: Relational database to store product data.
- **body-parser**: Middleware to parse incoming request bodies.

## Project Structure
```
js-crud-app/
│
├── config/
│   └── dbConnection.js    # MySQL connection configuration
│
├── models/
│   └── productModel.js    # Model for performing CRUD operations on products
│
├── routes/
│   └── productRoutes.js   # API routes for handling product-related requests
│
├── app.js                 # Main application entry point
│
└── README.md              # Project description and setup guide
```

## Getting Started

### Prerequisites
- Node.js >= 12
- MySQL
- npm (Node package manager)

### Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/leomaxuz/js-crud-app.git
   cd js-crud-app
   ```

2. **Install dependencies**:
   Run the following command to install the required Node.js packages:
   ```bash
   npm install
   ```

3. **Import the database**:
   Create the `products` table in your MySQL database:
   ```sql
   CREATE DATABASE js_crud_db;
   USE js_crud_db;
   CREATE TABLE products (
       id INT(11) AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       description TEXT,
       price DECIMAL(10, 2) NOT NULL,
       created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

4. **Configure MySQL credentials**:
   Update the database connection settings in `config/dbConnection.js`:
   ```js
   const connection = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: '',
       database: 'js_crud_db'
   });
   ```

5. **Run the application**:
   Start the server by running:
   ```bash
   node app.js
   ```

   Access the API at:
   ```bash
   http://localhost:3000/api/products
   ```

### Example API Endpoints:
- **GET all products**: `/api/products`
- **POST create new product**: `/api/products`
- **PUT update product**: `/api/products/{product_id}`
- **DELETE delete product**: `/api/products/{product_id}`

## License
This project is licensed under the MIT License.
