const express = require('express')
require('dotenv').config()
const {handleGetRequest, getEmployeeRequest, postEmployeeRequest, putEmployeeRequest, deleteEmployeeRequest} = require('./functions');

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_CONNECT)
	.then(()=>{
		console.log('Database Connected ...')
	})
	.catch((err)=>{
		console.err('Error connecting to Database', err.message);
	})

const app = express()

// middleware
app.use(express.json())

// CRUD OPERATIONS
app.get('/', handleGetRequest)

app.get('/get-employee', getEmployeeRequest)

app.post('/add-employee', postEmployeeRequest)

app.put('/edit-employee/:id', putEmployeeRequest)

app.delete('/delete-employee/:id', deleteEmployeeRequest)

// The server
const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
	console.log(`The server is listening on http://localhost:${PORT}`);
})