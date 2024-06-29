
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/database');
dotenv = require('dotenv').config();
const userRoutes = require('./routes/userRoutes');


const app = express();
PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();


app.get('/', (req, res)=>{
  return res.statusCode(200).json({message: 'Hello World!'});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());
// app.use('/api/users', userRoutes);
// app.use((req, res, next) => {
//   res.status(404).json({message: 'Page not found'});
// });
