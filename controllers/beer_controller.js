const express = require('express');
const router = express.Router();
const beer = require('../models/beer_schema.js')

//INDEX
router.get('/' , (req , res)=>{
    beer.find({}, (err, foundBeers)=>{
        res.json(foundBeers);
    });
});

//Create
router.post('/', (req , res)=>{
    beer.create(req.body , (err , createdBeer)=>{
        res.json(createdBeer);
    });
});

//EDIT
router.put('/:id' , (req , res)=>{
    beer.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err , updatedBeer)=>{
        res.json(updatedBeer);
    });
});

//DELETE
router.delete('/:id' , (req , res)=>{
    beer.findByIdAndRemove(req.params.id, (err , deletedBeer)=>{
        res.json(deletedBeer);
    });
});


module.exports = router;
