const express = require('express');
require('dotenv').config()
const products = require('./products');
const bodyParser = require('body-parser')

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());


// The end points
app.get('/', (req, res)=>{
	res.json('Welcome to homepage')
});

app.get('/products', (req, res)=>{
	res.json({ message: 'Products'})
});

app.post('/products', (req, res)=>{
	const newProduct = req.body;
	products.push(newProduct);
	res.status(201).json(newProduct);
});


// The server
app.listen(PORT, ()=>{
	console.log(`Server is running on http://localhost:${PORT}`)
})