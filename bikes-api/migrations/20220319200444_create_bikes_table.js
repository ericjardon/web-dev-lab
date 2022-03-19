
 exports.up = function(knex) {
    return knex.schema
    .createTable('bikes', (table) => {
      table.increments('id');
      table.string('model', 255).notNullable();
      table.string('color', 255).notNullable();
      table.decimal('lat', 11, 8).notNullable();
      table.decimal('lon', 11, 8).notNullable();
      table.timestamps(true, true);
    });
};


exports.down = function(knex) {
    return knex.schema
    .dropTable('bikes');
};
