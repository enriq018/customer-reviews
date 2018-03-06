
const pgp = require('pg-promise')(/*options*/);

const config = {
  host: 'localhost', // 'localhost' is the default
  port: 5432, // 5432 is the default;
  database: 'customerreviews',
  user: 'toast',
  password: 'plantlife',
};

const db = pgp(config);

module.exports = {
  db: db,
};
