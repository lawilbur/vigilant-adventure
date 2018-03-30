const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.json());

const beerController = require('./controllers/beer_controller.js')
app.use('/beers' , beerController);


mongoose.connect('mongodb://localhost:27017/beers');
mongoose.connection.once('open', () => {
    console.log('Mongod is listening');
})

app.listen(port, () => {
    console.log('Terminal is listening');
})
