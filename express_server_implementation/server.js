/*
This Js file will contain the neccessary code in order 
to iniatiate the server. 
*/
const express = require('express'); 
// express constant, express module imported. 
const app = express(); 
// app constant set to express methods. 
const PORT = process.env.PORT || 5000; 
// port set to 5000. 
app.listen( PORT, () => {
  console.log(`The server has started on ${PORT}`)
}); 
// listen statement to test what port the express app is running on. 

app.get('/' , (req,res) => {
// get method to send a response from the home page. 
  res.send('home/root page set, server is up.')
})

app.get('/express_backend', (req,res)=> {
  res.send({express:"THE EXPRESS BACKEND IS CONNECTED TO THE REACT APPLICATION"})
})
// get method created to implement backend into react application. 
