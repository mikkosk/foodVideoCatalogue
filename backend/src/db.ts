const Pool = require("pg").Pool;
import dotenv from 'dotenv';
dotenv.config()

const pool = new Pool({
    user: "postgres",
    password: process.env.DBP,
    host: "localhost",
    port: 5432,
    database: "fvc"
})

export default pool;