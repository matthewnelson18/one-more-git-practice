const express = require('express')
const app = express()
var PORT = 3000

app.get('/', function(req, res){
  res.send('hello world!')
})

var myComics = ['Zits', 'Archie', 'JugHead']

app.get('/comics', function(req, res){
  console.log('showing all the comics')
  message = "All of my comics: \n"
  message = message + myComics
  res.send(message)
app.get('/comics', function(req, res) {
  res.send('comics are fun to read')
})

app.listen(PORT, function(){
  console.log('Server running at port: ', PORT)
})
