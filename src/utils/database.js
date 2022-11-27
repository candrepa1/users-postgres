require('dotenv').config();
const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres', 
    host: process.env.HOST, 
    database: process.env.DB_NAME, 
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
 
module.exports = db;
