"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pool = require("pg").Pool;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var pool = new Pool({
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    database: process.env.DBDB,
});
exports.default = pool;
