const db = require('../dbConfig.js');

module.exports = {
  getDishes,
  getDish,
  addDish,
};

function getDishes() {
  return db('dishes');
}

function getDish(id) {
  const promises = [db('dishes').where({id}).first(), db('recipes').where({dish_id: id})];
  return Promise.all(promises).then(([dish, recipes]) => {
    dish.recipes = recipes;
    return dish;
  });
}

function addDish(dish) {
  return db('dishes').insert(dish, 'id').then(([id]) => id);
};
