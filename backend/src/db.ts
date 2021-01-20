const Pool = require("pg").Pool;
import dotenv from 'dotenv';
dotenv.config()

const pool = new Pool({
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBDB,
})

export default pool;
