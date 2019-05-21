const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'agi',
  password: 'password',
  database: 'test'
});

connection.connect();

connection.query('SELECT * FROM animals', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows)
})

connection.end();
