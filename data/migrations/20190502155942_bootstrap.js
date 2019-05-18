exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
    })
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable();
      tbl
        .text('instructions');
      tbl
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes');
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
    })
    .createTable('units', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
    })
    .createTable('recipes_ingredients', tbl => {
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients');
      tbl
        .integer('unit_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('units');
      tbl
        .decimal('quantity')
        .notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('units')
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishes');
};
