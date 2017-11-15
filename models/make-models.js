const knex = require('../db/connection.js')

function get() {
    return knex('car_makes')
}


module.exports = { get }
