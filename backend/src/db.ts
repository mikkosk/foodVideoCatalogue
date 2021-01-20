var pg = require("pg");
import dotenv from 'dotenv';

pg.defaults.ssl = true;

const devConfig = {
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBDB,
}

const proConfig = {
    connectionString: `${process.env.DATABASE_URL}`,
    ssl: { rejectUnauthorized: false }
}

const pool = new pg.Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig)

export default pool;
