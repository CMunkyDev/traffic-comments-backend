
exports.up = knex => {
  return knex.schema.createTable('lists', table => {
      table.increments()
      table.string('title').notNullable().defaultsTo('')
      table.text('description').notNullable().defaultsTo('')
      table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('lists')
};
