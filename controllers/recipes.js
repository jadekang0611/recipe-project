const express = require('express');
const Recipe = require('../db/recipeSchema');
const router = express.Router();

router.get('/', (req, res) => {
  Recipe.find({})
    .then(recipes => {
      console.log(recipes);
      res.render('index', { recipes });
    })
    .catch(console.error);
});

router.get('/new', (req, res) => {
    res.render('new');
});

router.get('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      res.render('show', recipe);
    })
    .catch(console.error);
});

router.post('/', (req, res) => {
    Recipe.create(req.body)
    .then(recipe => {
        res.redirect('/recipes');
    })
    .catch(console.error);
});

module.exports = router;
