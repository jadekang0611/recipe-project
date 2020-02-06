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

router.get('/:id/edit', (req, res) => {
  Recipe.findById(req.params.id).then(recipe => {
    res.render('edit', recipe);
  });
});

router.get('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      res.render('show', recipe);
    })
    .catch(console.error);
});

router.put('/:id', (req, res) => {
  const recipe = {
    title: req.body.title,
    description: req.body.description,
    ingredients: req.body.ingredients,
    instruction: req.body.instruction
  };
  Recipe.findOneAndUpdate({ _id: req.params.id }, recipe, {
    new: true
  }).then(recipe => {
    res.redirect('/recipes');
  });
});

router.post('/', (req, res) => {
  Recipe.create(req.body)
    .then(recipe => {
      res.redirect('/recipes');
    })
    .catch(console.error);
});

module.exports = router;
