// Importing express framwork and dotenv
const express = require('express');
require('dotenv').config();

// Initialization
const app = express();

// Endpoint 1
app.get('/string', (req, res)=>{				//Path or endpoint named string
	res.send('Send a string as response')		//Respnse returning a string
})

// Endpoint 2
app.get('/object', (req, res)=>{				//Path or endpoint named object
	res.send({message: 'Hello, world!'})		//Response returning an object
})

// Endpoint 3
app.get('/array', (req, res)=>{
	res.send(['apple', 'banana', 'orange'])
})



// Creating the server
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
	console.log(`Server is running on http://localhost:${PORT}`)
})
