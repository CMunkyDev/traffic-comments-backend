let postMax = 12
let listMax = 3

function oneRow () {
  return { list_id: Math.floor(Math.random() * listMax) + 1, post_id: Math.floor(Math.random() * postMax) + 1 }
}

let listPostArr = []

for (let i = 0; i < ((Math.random() * 25) + 20); i++) {
  let newRow = oneRow()
  //console.log(newRow)
  if (!listPostArr.find(row => row.list_id === newRow.list_id && row.post_id === newRow.post_id)) {
    //console.log('row added')
    listPostArr.push(newRow)
  } else {
    //console.log('row denied')
  }
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lists_posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('lists_posts').insert(listPostArr);
    })
}
