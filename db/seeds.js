const Recipe = require('./recipeSchema');
const seedData = require('./seeds.json');

Recipe.remove({})
  .then(() => {
    return Recipe.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
