const express = require('express');
const dotenv = require('dotenv');

dotenv.config()

const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res)=>{

})

app.listen(PORT, ()=>{
	console.log(`The server is running on http://localhost:${PORT}`);
})
