const mongoose = require('mongoose');


const beerSchema = new mongoose.Schema(
    name: String,
    brand: String,
    img: String,
    abv: Number,
    likes: Number

)

const Beer = mongoose.model('Beer' , beerSchema);

module.exports = Beer;
