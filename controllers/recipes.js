const express = require('express');
const Recipe = require('../db/recipeSchema');
const router = express.Router();

router.get('/', (req, res) => {
    Recipe.find({})
    .then(recipes => {
        console.log(recipes)
        res.render('index', { recipes })
    })
    .catch(console.error);
});


module.exports = router;