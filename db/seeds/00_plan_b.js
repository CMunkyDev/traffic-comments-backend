
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    let delInOrder = [
      knex('lists_posts').del(),
      knex('posts').del(),
      knex('lists').del(),
      knex('car_makes').del()
    ]
    return Promise.all(delInOrder)
}
