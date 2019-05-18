exports.seed = function(knex, Promise) {
  return knex('dishes').del()
    .then(() => {
      return knex('dishes').insert([
        {id: 1, name: 'Pasta'},
        {id: 2, name: 'Rice'},
        {id: 3, name: 'Beans'}
      ]);
    })
    .then(() => {
      return knex('recipes').del();
    })
    .then(() => {
      return knex('recipes').insert([
        {id: 1,
         name: 'Putanesca',
         instructions: 'TBD',
         dish_id: 1
        },
        {id: 2,
         name: 'Aglio e Olio',
         instructions: 'TBD',
         dish_id: 1
        },
        {id: 3, name: 'Gringo Rice', dish_id: 2},
        {id: 4, name: 'Better Rice', dish_id: 2},
        {id: 5, name: 'Lazy Beans', dish_id: 3},
      ]);
    })
    .then(() => {
      return knex('ingredients').del();
    })
    .then(() => {
      return knex('ingredients').insert([
        {id: 1, name: 'Pasta'},
        {id: 2, name: 'Garlic'},
        {id: 3, name: 'Onion'},
        {id: 4, name: 'Butter'},
        {id: 5, name: 'Olive Oil'},
        {id: 6, name: 'Anchovie'},
        {id: 7, name: 'Canned Whole Tomatoes'},
        {id: 8, name: 'Red Pepper Flakes'},
        {id: 9, name: 'White Rice'},
        {id: 10, name: 'Water'},
        {id: 11, name: 'Black Beans'},
        {id: 12, name: 'Oregano'},
        {id: 13, name: 'Bay Leaf'},
        {id: 14, name: 'Cumin'},
      ]);
    })
    .then(() => {
      return knex('units').del();
    })
    .then(() => {
      return knex('units').insert([
        {id: 1, name: 'lbs'},
        {id: 2, name: 'clove'},
        {id: 3, name: 'whole'},
        {id: 4, name: 'tbsp'},
        {id: 5, name: 'can'},
        {id: 6, name: 'cup'},
        {id: 7, name: 'tsp'},
      ]);
    })
    .then(() => {
      return knex('recipes_ingredients').del();
    })
    .then(() => {
      return knex('recipes_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, unit_id: 1, quantity: 1},
        {recipe_id: 1, ingredient_id: 2, unit_id: 2, quantity: 5},
        {recipe_id: 1, ingredient_id: 3, unit_id: 3, quantity: 1},
        {recipe_id: 1, ingredient_id: 4, unit_id: 4, quantity: 2},
        {recipe_id: 1, ingredient_id: 5, unit_id: 4, quantity: 4},
        {recipe_id: 1, ingredient_id: 6, unit_id: 5, quantity: 1},
        {recipe_id: 1, ingredient_id: 7, unit_id: 5, quantity: 1},
        {recipe_id: 1, ingredient_id: 8, unit_id: 7, quantity: 2},
        {recipe_id: 2, ingredient_id: 1, unit_id: 1, quantity: 1},
        {recipe_id: 2, ingredient_id: 2, unit_id: 2, quantity: 6},
        {recipe_id: 2, ingredient_id: 8, unit_id: 7, quantity: 2},
        {recipe_id: 2, ingredient_id: 5, unit_id: 6, quantity: 0.5},
      ]);
    });
};
