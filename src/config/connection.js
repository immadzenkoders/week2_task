// const mysql = require('mysql2');
// const mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password: 'immad123',
//     database: 'course_managementdb'
// });



// module.exports = mysqlConnection;

// config/database.js
const mysql = require('mysql2');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'immad123',
    database: 'course_managementdb'
};

const pool = mysql.createPool(dbConfig);

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Unable to connect to the database: " + JSON.stringify(err, undefined, 2));
    } else {
        console.log("Database connected successfully");
        connection.release();  // release the connection back to the pool
    }
});

module.exports = pool.promise();
