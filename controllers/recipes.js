const express = require('express');
const Recipe = require('../db/recipeSchema');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('hello world')
    // Recipe.find({})
    // .then(recipes => {
    //     res.render('index', { recipes })
    // })
    // .catch(console.error);
});


module.exports = router;