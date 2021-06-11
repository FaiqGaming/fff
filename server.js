const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', async(req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.listen(5000, async() => {
  console.log('Ok im listen you')
})