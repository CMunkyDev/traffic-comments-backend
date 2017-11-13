
exports.up = knex => {
  return knex.schema.createTable('car_makes', table => {
    table.increments()
    table.string('name').notNullable()
    table.boolean('show').notNullable().defaultsTo(true)
  })
}

exports.down = knex => {
  return knex.schema.dropTable('car_makes')
}
