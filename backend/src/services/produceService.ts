import { QueryResult } from "pg";
import pool from "../db";
import { newProduce, Produce } from "../types";

const getAllProduce = async(): Promise<QueryResult[]> => {
    const allProduce: QueryResult = await pool.query(
        "SELECT * FROM produce"
    );
    return allProduce.rows;
}

const getProduce = async(produceId: Produce['id']): Promise<QueryResult> => {
    const produce = await pool.query(
        "SELECT * FROM produce WHERE produceid = $1", [produceId]
    )
    return produce.rows[0];
}

const addProduce = async(entry: newProduce): Promise<QueryResult> => {
    const { produceName, pricePerGram, caloriesPerGram } = entry;
    const newProduce: QueryResult = await pool.query(
        "INSERT INTO produce (produceName, price, calories) VALUES($1, $2, $3) RETURNING *",
        [produceName, pricePerGram, caloriesPerGram]
    );
    return newProduce.rows[0];
}


const deleteProduce = async(id: Produce["id"]) => {
    await pool.query(
        "DELETE FROM produce WHERE produceid = $1", [id]
    )
}

export default { addProduce, deleteProduce, getAllProduce, getProduce }