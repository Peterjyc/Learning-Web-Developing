console.log('Running');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require ('mongodb').MongoClient
const connectionString = 'mongodb+srv://jypeterc:Peter359.@cluster0.dsbrdb2.mongodb.net/?retryWrites=true&w=majority'


MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.set('view engine', 'ejs');

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static('public'))
    app.use(bodyParser.json())

    app.listen(3000, function(){
        console.log('listening on 3000')
    })

    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray()
        .then(data => {
            console.log(data)
            res.render('index.ejs', { info: data })
        })
        .catch(error => console.log(error))
        console.log(req.body)
    })

    app.post('/quotes', (req, res) => {
        console.log(req.body)
        quotesCollection.insertOne(req.body)
            .then(result => {
                res.redirect('/')
            })
            .catch(err => console.error(error))
    })

    app.put('/quotes', (req, res) => {
        quotesCollection.findOneAndUpdate(
            { name: 'Yoda' },
            {$set: {
                name: req.body.name,
                quote: req.body.quote
              }},
            {upsert: true}
          )
          .then(res => {
            res.json('Success')
          })
          .catch(error => console.error(error))
      })

  })
