//const { transportTypeArr, postTypeArr } = require('../lists')
exports.up = knex => {
  return knex.schema.createTable('posts', table => {
      table.increments()
      table.string('title').notNullable().defaultsTo('')
      table.text('content').notNullable().defaultsTo('')
      table.integer('self_transportation_index').notNullable()
      table.integer('self_car_make_id')
      table.string('self_car_model').defaultsTo('')
      table.string('self_car_year').defaultsTo('')
      table.string('self_car_color').defaultsTo('')
      table.integer('other_transportation_index').notNullable()
      table.integer('other_car_make_id')
      table.string('other_car_model').defaultsTo('')
      table.string('other_car_color').defaultsTo('')
      table.integer('post_type_index').notNullable()
      table.string('location').defaultsTo('')
      table.string('date').defaultsTo('')
    //   knex.raw(`CHECK self_transportation_index > -1`)
    //   knex.raw(`CHECK self_transportation_index < ${transportTypeArr.length}`)
    //   knex.raw(`CHECK other_transportation_index > -1`)
    //   knex.raw(`CHECK other_transportation_index < ${transportTypeArr.length}`)
    //   knex.raw(`CHECK post_type_index > -1`)
    //   knex.raw(`CHECK post_type_index < ${postTypeArr.length}`)
      table.foreign('self_car_make_id').references('car_makes.id')
      table.foreign('other_car_make_id').references('car_makes.id')
      table.timestamps(true, true)
  })
  //.then check?
}

exports.down = knex => {
  return knex.schema.dropTable('posts')
}
