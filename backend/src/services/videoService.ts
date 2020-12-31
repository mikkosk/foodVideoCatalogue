import { QueryResult } from "pg";
import { newVideo, User, Video } from "../types";
import bcrypt from "bcrypt";
import pool from "../db";
import { toNewVideo } from "../utils/parser";

const addVideo = async (entry: newVideo, user: User['id']): Promise<QueryResult> => {
    const {videoUrl, timeInMinutes, vegetarian, added} = entry

    const newVideo: QueryResult = await pool.query(
        "INSERT INTO videos (userId, videoUrl, timeInMinutes, vegetarian, added) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [user, videoUrl, timeInMinutes, vegetarian, added]
    );
    return newVideo.rows[0];
};

const addClick = async(id: User['id']): Promise<QueryResult> => {
    const updatedVideo: QueryResult = await pool.query(
        "UPDATE videos SET clicks = clicks + 1 WHERE videoid = $1 RETURNING *", [id]
    );
    return updatedVideo.rows[0];
}

const getVideo = async (videoId: Video['id']): Promise<QueryResult> => {
    const video: QueryResult = await pool.query(
        `SELECT videos.*, JSON_AGG(json_build_object(
            'ingredientid', ingredients.ingredientid,
            'produceid', produce.produceid,
            'producename', produce.producename,
            'price', produce.price,
            'calories', produce.calories,
            'quantity', ingredients.quantity
            )) 
        FROM videos 
        JOIN ingredients on videos.videoid = ingredients.videoid 
        join produce on  ingredients.produceid = produce.produceid
        WHERE videos.videoid = $1
        GROUP BY videos.videoid`, 
        [videoId]
    )
    return video.rows[0]
}

const getVideos = async (): Promise<QueryResult[]> => {
    const videos: QueryResult = await pool.query(
        `SELECT videos.*, JSON_AGG(json_build_object(
            'ingredientid', ingredients.ingredientid,
            'produceid', produce.produceid,
            'producename', produce.producename,
            'price', produce.price,
            'calories', produce.calories,
            'quantity', ingredients.quantity
            )) 
        FROM videos 
        JOIN ingredients on videos.videoid = ingredients.videoid 
        join produce on  ingredients.produceid = produce.produceid
        GROUP BY videos.videoid`, 
    )
    return videos.rows
}

const deleteVideo = async(id: Video["id"]) => {
    await pool.query(
        "DELETE FROM videos WHERE videoid = $1", [id]
    )
}
export default {addVideo, getVideo, getVideos, deleteVideo, addClick}
