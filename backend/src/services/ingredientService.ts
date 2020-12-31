import { QueryResult } from "pg";
import pool from "../db";
import { Ingredient, newIngredient } from "../types";
const pgp = require('pg-promise')();

const addIngredients = async(entries: newIngredient[]): Promise<QueryResult[]> => {
    const cs = new pgp.helpers.ColumnSet(['videoId', 'quantity', 'produceId'], {table: 'ingredients'})
    const query = pgp.helpers.insert(entries, cs).toLowerCase() + " returning *"
    console.log(query)
    const newIngredients: QueryResult = await pool.query(
        query
    );
    return newIngredients.rows;

}

export default {addIngredients}