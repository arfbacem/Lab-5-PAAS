const profiles = [
  { name:'Imen' },
  { name:'Ala' },
  { name:'Bacem' },
  { name:'dddd' },
  { name:'ffff' }
];

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert(profiles);
    });
};
