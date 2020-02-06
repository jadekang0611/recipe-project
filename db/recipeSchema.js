const mongoose = require('./connection');

const RecipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  instruction: [String],
  ingredients: [String]
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
