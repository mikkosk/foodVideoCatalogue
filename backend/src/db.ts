const Pool = require("pg").Pool;
import dotenv from 'dotenv';
dotenv.config()

const pool = new Pool({
    user: "postgres",
    password: process.env.DB_PS
})