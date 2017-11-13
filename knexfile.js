const path = require('path')

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/traffic_comment_site',
    /*pool: {
      afterCreate: function (conn, done) {
        conn.query('SET timezone="UTC";', function (err) {
          if (err) {
            done(err, conn)
          } else {
            conn.query('SELECT set_limit(0.01);', function (err) {
              done(err, conn)
            })
          }
        })
      }
    },*/
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,/*
    pool: {
      afterCreate: function (conn, done) {
        conn.query('SET timezone="UTC";', function (err) {
          if (err) {
            done(err, conn)
          } else {
            conn.query('SELECT set_limit(0.01);', function (err) {
              done(err, conn)
            })
          }
        })
      }
    },*/
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
}

