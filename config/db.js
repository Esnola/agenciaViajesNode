import { Sequelize } from "sequelize";

import dotenv from 'dotenv/config';

//dotenv.config()

console.log(process.env.DB_HOST)
console.log(process.env.DB_NAME)

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.DB_PASS,{
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define:{
        timestamps: false
    },
    pool:{
        max:5,
        min: 0,
        acquire: 30000,
        idle:1000
    },
    operatorsAliases: false
});

export default db;