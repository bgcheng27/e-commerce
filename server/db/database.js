const { Client } = require("pg");

const db = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "e_commerce"
});

db.connect()

module.exports = db;