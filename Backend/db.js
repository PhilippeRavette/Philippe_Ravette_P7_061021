// Connexion à la base de données MySQL
const mysql = require('mysql');

require('dotenv').config()

// Création de la connexion a la base
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
});

// Connection 
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL est connecté');
});

module.exports = db;