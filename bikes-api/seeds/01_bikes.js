
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bikes').del()
    .then(function () {
      // Inserts seed entries
      return knex('bikes').insert([
        { color: 'rojo', model: 'BMX', lat: 19.284076, lon: -99.1355524 },
        { color: 'negro', model: 'Route', lat: 20.284076, lon: -100.1355524 },
        { color: 'verde', model: 'Vintage', lat: 19.384076, lon: -100.7655524 },
      ]);
    });
};
