const express = require('express')
const app = express(); 
const PORT = process.env.PORT || 8000; 

const multer = require('multer'); 








app.get('/', (req,res) => {
  res.send('<h1>Server home page here.</h1>')
})

app.listen(PORT, () => {
  console.log(`Server has started on...${PORT}, ctrl c to end.`)
})