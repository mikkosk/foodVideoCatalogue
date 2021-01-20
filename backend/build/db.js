"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg = require("pg");
require('dotenv').config();
var devConfig = {
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBDB,
};
var proConfig = {
    connectionString: "" + process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false
};
var pool = new pg.Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);
exports.default = pool;
