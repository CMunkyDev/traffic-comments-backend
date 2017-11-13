let hipIp = require('hipsteripsum')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lists').del()
    .then(function () {
      // Inserts seed entries
      return knex('lists').insert([
        { id: 1, title: hipIp.getWords(Math.floor(Math.random() * 7) + 1), description: hipIp.getWords(Math.floor(Math.random() * 15) + 1) },
        { id: 2, title: hipIp.getWords(Math.floor(Math.random() * 7) + 1), description: hipIp.getWords(Math.floor(Math.random() * 15) + 1) },
        { id: 3, title: hipIp.getWords(Math.floor(Math.random() * 7) + 1), description: hipIp.getWords(Math.floor(Math.random() * 15) + 1) }
      ])
    })
    .then(() => {
      knex.raw(`SELECT setval('lists_id_seq', (SELECT MAX(id) FROM lists));`)
    })

}
