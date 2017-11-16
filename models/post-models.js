const knex = require('../db/connection.js')
const { transportTypeArr: transTypeList, postTypeArr: postTypeList } = require('../db/lists.js')

function get() {
    return knex('posts')
        .leftJoin('car_makes', 'car_makes.id', 'self_car_make_id')
        .leftJoin('car_makes as car_makes_2', 'car_makes_2.id', 'other_car_make_id')
        .select('title', 'content', 'self_transportation_index as self_transport', 'car_makes.name as self_make', 'self_car_model as self_model', 'self_car_year as self_year', 'self_car_color as self_color', 'other_transportation_index as other_transport', 'car_makes_2.name as other_make', 'other_car_model as other_model', 'other_car_color as other_color', 'post_type_index as post_type', 'created_at', 'updated_at')
        .orderBy('posts.id')
}


function create(body) {
  console.log('mod body: ', body)
    return knex('posts')
        .insert(body, '*')
        .then(([insertedRow]) =>  {
          console.log('knex inserted: ', insertedRow)
          return insertedRow
        })
}

function find(id) {
    return knex('posts')
        .leftJoin('car_makes', 'car_makes.id', 'self_car_make_id')
        .leftJoin('car_makes as car_makes_2', 'car_makes_2.id', 'other_car_make_id')
        .select('title', 'content', 'self_transportation_index as self_transport', 'car_makes.name as self_make', 'self_car_model as self_model', 'self_car_year as self_year', 'self_car_color as self_color', 'other_transportation_index as other_transport', 'car_makes_2.name as other_make', 'other_car_model as other_model', 'other_car_color as other_color', 'post_type_index as post_type', 'created_at', 'updated_at', 'posts.id')
        .where('posts.id', id)
        .first()
}

function destroy(id) {
    return knex('posts')
        .where({ id })
        .del()
        .returning('*')
        .then(([deletedRow]) => deletedRow)
}

function patch(id, patch) {
    return knex('posts')
        .where({ id })
        .update(patch)
        .returning('*')
        .then(([updatedRow]) => updatedRow)
}

module.exports = {
    get, create, find, destroy, patch
}
