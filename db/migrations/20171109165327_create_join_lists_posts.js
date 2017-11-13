
exports.up = knex => {
  return knex.schema.createTable('lists_posts', table => {
      table.integer('list_id').notNullable()
      table.integer('post_id').notNullable()
      table.foreign('list_id').references('lists.id').onDelete('CASCADE')
      table.foreign('post_id').references('posts.id').onDelete('CASCADE')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('lists_posts')
}
