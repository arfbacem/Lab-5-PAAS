
exports.up = function(knex) {
  return knex.schema
    .createTable('profiles', function(table){
        table.increments('profile_id');
        table.string('name',128).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('profiles');
  
};
