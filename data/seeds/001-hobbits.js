exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  console.log(knex)
  return knex('hobbits')
    .truncate()
    .then(function () {
      return knex('hobbits').insert([
        { name: 'sam' },
        { name: 'frodo' },
        { name: 'pippin' },
        { name: 'merry' },
      ]);
    });
};
