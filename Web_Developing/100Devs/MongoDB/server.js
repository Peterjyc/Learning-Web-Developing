console.log('Running');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require ('mongodb').MongoClient
const connectionString = 'mongodb+srv://jypeterc:Peter359.@cluster0.dsbrdb2.mongodb.net/?retryWrites=true&w=majority'

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function(){
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})

MongoClient.connect(connectionString, {
    useUnifiedTopology: true
  }, (err, client) => {
    if (err) return console.error(err);
    console.log('Connected to Database')
  })
