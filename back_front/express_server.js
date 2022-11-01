const express = require('express')
const app = express(); 
const PORT = process.env.PORT  || 8000; 

// talk to the front end!


app.get('/', (req, res) => {
  res.send('Server home page!')
})

app.listen(PORT, () => {
  console.log(`Server has started on port${PORT}, press ctrl+c to end. `)
})