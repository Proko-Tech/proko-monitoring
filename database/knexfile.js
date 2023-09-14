require('dotenv').config();

const SQLConnection = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  timezone: 'UTC',
}

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    version: '8.0',
    connection: SQLConnection,
    migrations: {
      directory: './migrations',
      tablename: 'knex_migrations'
    },
    useNullAsDefault: true,
  },

};
