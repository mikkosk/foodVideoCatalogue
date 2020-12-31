import { QueryResult } from "pg";
import { newUser, User, Video } from "../types";
import bcrypt from "bcrypt";
import pool from "../db";

const addUser = async (entry: newUser): Promise<QueryResult> => {
    const {username, password} = entry
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    const newUser: QueryResult = await pool.query(
        "INSERT INTO users (username, hashcode) VALUES($1, $2) RETURNING *",
        [username, passwordHash]
    );
    return newUser.rows[0];
};

const getUser = async (userId: User['id']): Promise<QueryResult> => {
    const user = await pool.query(
        `SELECT users.*, JSON_AGG(json_build_object(
            'videoid', videos.videoid,
            'videoUrl', videos.videourl,
            'favourites', videos.favourites,
            'clicks', videos.clicks,
            'timeInMinutes', videos.timeinminutes,
            'vegetarian', videos.vegetarian,
            'added', videos.added
            )) 
        FROM users 
        JOIN videos on videos.userid = users.userid 
        WHERE user.userid = $1
        GROUP BY users.userid`, [userId]
    )

    return user.rows[0]
}

const deleteUser = async(id: User["id"]) => {
    await pool.query(
        "DELETE FROM users WHERE userid = $1", [id]
    )
}

const favouriteVideo = async(userId: User['id'], videoId: Video['id']) => {
    await pool.query(
        "INSERT INTO userfavouritevideo (userid, videoid) VALUES($1, $2)",
        [userId, videoId]
        )
}
export default {addUser, getUser, deleteUser, favouriteVideo}