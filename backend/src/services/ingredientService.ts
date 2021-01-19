import { QueryResult } from "pg";
import pool from "../db";
import { DatabaseIngredient, newIngredient } from "../types";
const pgp = require('pg-promise')();

const addIngredients = async(entries: newIngredient[]): Promise<DatabaseIngredient[]> => {
    const cs = new pgp.helpers.ColumnSet(['videoId', 'quantity', 'produceId'], {table: 'ingredients'})
    const query = pgp.helpers.insert(entries, cs).toLowerCase() + " returning *"
    const newIngredients: QueryResult = await pool.query(
        query
    );
    return newIngredients.rows;

}

export default {addIngredients}