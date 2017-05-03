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
})

app.get('/comics/:name', function(req, res){
  console.log("I'll show you the comic", req.params)
  var ind = myComics.indexOf(req.params.name)
  res.send(myComics[ind])
})

app.listen(PORT, function(){
  console.log('Server running at port: ', PORT)
})
