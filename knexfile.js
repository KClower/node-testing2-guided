const pgConnection = process.env.PG_URL

const common = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
}

module.exports = {
  development: {
    ...common,
    connection: {
      filename: './data/hobbits.db3',
    },
  },
  testing: {
    ...common,
    connection: {
      filename: './data/test.db3',
    },
  },
  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
  },
};
