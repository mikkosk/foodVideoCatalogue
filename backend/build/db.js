"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
pg.defaults.ssl = true;
var devConfig = {
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBDB,
};
var proConfig = {
    connectionString: process.env.DATABASE_URL
};
var pool = new pg.Pool(process.env.NODE_ENV === "production" ? proConfig : devConfig);
exports.default = pool;
