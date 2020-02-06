const recipesController = require('./controllers/recipes');

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.use('/recipes', recipesController);

app.listen(4000, () => {
  console.log("we're listening on port 4000");
});
