const db = require('../dbConfig.js');

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
};

function getRecipes() {
  return db('recipes');
}

function getRecipe(id) {
  const ingredientsQuery = db
        .select()
        .from('recipes_ingredients as m')
        .where({recipe_id: id})
        .join('units as u', 'u.id', 'm.unit_id')
        .join('ingredients as i', 'i.id', 'm.ingredient_id');
  const promises = [db('recipes').where({id}).first(), ingredientsQuery];
  return Promise.all(promises).then(([recipe, ingredients]) => {
    recipe.ingredients = ingredients;
    return recipe;
  });
}

function addRecipe(recipe) {
  return db('recipes').inset(recipe, 'id').then(([id]) => id);
}
