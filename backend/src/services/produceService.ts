import { QueryResult } from "pg";
import pool from "../db";
import { DatabaseProduce, newProduce, Produce } from "../types";

const getAllProduce = async(): Promise<DatabaseProduce[]> => {
    const allProduce: QueryResult = await pool.query(
        "SELECT * FROM produce"
    );

    return allProduce.rows;
}

const getProduce = async(produceId: Produce['id']): Promise<DatabaseProduce> => {
    const produce = await pool.query(
        "SELECT * FROM produce WHERE produceid = $1", [produceId]
    );

    return produce.rows[0];
}

const addProduce = async(entry: newProduce): Promise<DatabaseProduce> => {
    const { produceName, pricePerGram, caloriesPerGram } = entry;

    try {
        const newProduce: QueryResult = await pool.query(
            "INSERT INTO produce (produceName, price, calories) VALUES($1, $2, $3) RETURNING *",
            [produceName, pricePerGram, caloriesPerGram]
        );

        return newProduce.rows[0];

    } catch (e) {
        throw new Error("Could not add the produce! Make sure it does not already exist!")
    }
}


const deleteProduce = async(id: Produce["id"]) => {
    await pool.query(
        "DELETE FROM produce WHERE produceid = $1", [id]
    )
}

export default { addProduce, deleteProduce, getAllProduce, getProduce }