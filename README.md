# 👨‍💻 Pair Project

## Collaborators

### Daisy Yau
### Jade Kang

## Project Description

- Build an app that lets users create posts for their favorite recipes (title, description, instructions, ingredients). Users can add new recipes and see recipes posted by others.

## Plan for the Day

### Daisy and Jade will be building the following:

- Build a controller
- Build a schema for recipe card
- Build an index handlebar
- Build an new recipe handlebar (C)
- Build an show all recipes handlebar (R)
- Build an edit handlebar (U)
- Build an recipe delete handlebar (D)
- We should build a basic recipe data.json file
- We need to build a json converter for our schema and MongoDB to communicate.

## Items in detail

### Recipe schema:

    - Title
    - Description
    - Instructions
    - Ingredients

### Controller

    - It's the recipe controller:
    	- GET all recipes
        - GET individual recipes/:title
        - POST recipe to save a new recipe
        - PUT recipe to update a recipe (recipe/:title)
        - DELETE recipe to delete a recipe (recipe/:title)

### Handlebars

- New Handlebar
  ```
  <h2>Add a new Recipe:</h2>
  	<form action="/recipes" method="post" accept-charset="utf-8">
  		<label for="title">Title</label>
      	<input type="text" id="title" name="title" >
      	<input type="submit" value="Add to do">
      </form>
  ```
- Show Handlebar
  ```<h1>{{title}}</h1>
  	{{#if complete}}
      	<p>Cook!</p>
      {{else}}
      	<p>Haven't tried yet!</p>
      {{/if}}
      	<form action="/todos/{{_id}}?_method=delete" method="post">
      		<input type="submit" value="Remove">
      	</form>
  ```
- Edit Handlebar
  ```
  <h2>Edit My Recipe:</h2>
  		<form action="/todos/{{this._id}}?_method=put" method="POST">
  			<p>
              	<label>Title:</label>
                  <input type="text" value="{{this.title}}" name="title" />
              </p>
  			<p>
              	<label>Complete:</label>
     		 {{#if complete}}
     			 <input type="checkbox" name="complete" checked />
      	{{else}}
     			 <input type="checkbox" name="complete" />
      	{{/if}}
  			</p>
  			<input type="submit" value="Update" />
  		</form>
  ```
- Delete Handlebar

  ```
  <form action="/recipes/{{_id}}?_method=delete" method="post">
  <input type="submit" value="Remove"></form>

  ```

- Index Handlebar

  ```
  <h1>Yummy!</h1>
  <ul>
  {{#each todos}}
  <li>
      <a href='todos/{{this._id}}'>{{this.title}}</a>
      <a href='todos/{{this._id}}/edit'>Edit</a>
  </li>
  {{/each}}</ul> <a href='todos/new'>New</a>

  ```

## Roadmap
