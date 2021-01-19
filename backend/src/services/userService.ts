import { QueryResult } from "pg";
import { DatabaseUser, newUser, User, UserWithVideos, Video } from "../types";
import bcrypt from "bcrypt";
import pool from "../db";

const addUser = async (entry: newUser): Promise<DatabaseUser> => {
    const {username, password} = entry
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    const newUser: QueryResult = await pool.query(
        "INSERT INTO users (username, hashcode) VALUES($1, $2) RETURNING *",
        [username, passwordHash]
    );
    
    return newUser.rows[0];
};

const getUser = async (userId: User['id']): Promise<UserWithVideos> => {
    const user = await pool.query(
        `SELECT users.*, videos.videos, favourites.favourites
        FROM users
        LEFT JOIN (SELECT users.*, JSON_AGG(json_build_object(
                'videoid', videos.videoid,
                'videourl', videos.videourl,
                'favourites', videos.favourites,
                'clicks', videos.clicks,
                'timeinminutes', videos.timeinminutes,
                'vegetarian', videos.vegetarian,
                'added', videos.added,
                'videoname', videos.videoname,
                'channelname', videos.channelname,
                'ingredients', ingredientsVid.json_agg
                )) as videos
    
            FROM users 
            JOIN videos on videos.userid = users.userid 
            LEFT JOIN (SELECT videosArray.videoid, videosArray.json_agg
                    from (SELECT videos.*, users.username, JSON_AGG(json_build_object(
                                'ingredientid', ingredients.ingredientid,
                                'produceid', produce.produceid,
                                'producename', produce.producename,
                                'price', produce.price,
                                'calories', produce.calories,
                                'quantity', ingredients.quantity
                                )) 
                            FROM videos 
                            JOIN users on users.userid = videos.userid
                            JOIN ingredients on videos.videoid = ingredients.videoid 
                            JOIN produce on  ingredients.produceid = produce.produceid
                            GROUP BY videos.videoid, users.username) as videosArray
                    ) AS ingredientsVid
                ON ingredientsVid.videoid = videos.videoid
    
            WHERE users.userid = $1
            GROUP BY users.userid) as videos
            on users.userid = videos.userid
            
        LEFT JOIN (SELECT users.userid, 
                JSON_AGG(json_build_object(
                'videoid', favourites.videoid,
                'videourl', favourites.videourl,
                'favourites', favourites.favourites,
                'clicks', favourites.clicks,
                'timeinminutes', favourites.timeinminutes,
                'vegetarian', favourites.vegetarian,
                'added', favourites.added,
                'videoname', favourites.videoname,
                'channelname', favourites.channelname,
                'ingredients', ingredientsFav.json_agg
                )) as favourites
            FROM users 
            JOIN userfavouritevideo on userfavouritevideo.userid = users.userid
            JOIN videos AS favourites ON favourites.videoid = userfavouritevideo.videoid
            
            LEFT JOIN (SELECT favouritesArray.videoid, favouritesArray.json_agg
                    from (SELECT videos.*, users.username, JSON_AGG(json_build_object(
                                'ingredientid', ingredients.ingredientid,
                                'produceid', produce.produceid,
                                'producename', produce.producename,
                                'price', produce.price,
                                'calories', produce.calories,
                                'quantity', ingredients.quantity
                                )) 
                            FROM videos 
                            JOIN users on users.userid = videos.userid
                            JOIN ingredients on videos.videoid = ingredients.videoid 
                            JOIN produce on  ingredients.produceid = produce.produceid
                            GROUP BY videos.videoid, users.username) as favouritesArray
                    ) AS ingredientsFav
                ON ingredientsFav.videoid = favourites.videoid
            WHERE users.userid = $1
            GROUP BY users.userid) as favourites
            ON users.userid = favourites.userid
        WHERE users.userid = $1
    `, [userId]
    )

    return user.rows[0]
}

const getLoginUser = async (username: User['username']): Promise<UserWithVideos> => {
    const user = await pool.query(
        `SELECT users.*, videos.videos, favourites.favourites
        FROM users
        LEFT JOIN (SELECT users.*, JSON_AGG(json_build_object(
                'videoid', videos.videoid,
                'videourl', videos.videourl,
                'favourites', videos.favourites,
                'clicks', videos.clicks,
                'timeinminutes', videos.timeinminutes,
                'vegetarian', videos.vegetarian,
                'added', videos.added,
                'videoname', videos.videoname,
                'channelname', videos.channelname,
                'ingredients', ingredientsVid.json_agg
                )) as videos
    
            FROM users 
            JOIN videos on videos.userid = users.userid 
            LEFT JOIN (SELECT videosArray.videoid, videosArray.json_agg
                    from (SELECT videos.*, users.username, JSON_AGG(json_build_object(
                                'ingredientid', ingredients.ingredientid,
                                'produceid', produce.produceid,
                                'producename', produce.producename,
                                'price', produce.price,
                                'calories', produce.calories,
                                'quantity', ingredients.quantity
                                )) 
                            FROM videos 
                            JOIN users on users.userid = videos.userid
                            JOIN ingredients on videos.videoid = ingredients.videoid 
                            JOIN produce on  ingredients.produceid = produce.produceid
                            GROUP BY videos.videoid, users.username) as videosArray
                    ) AS ingredientsVid
                ON ingredientsVid.videoid = videos.videoid
    
            WHERE users.username = $1
            GROUP BY users.userid) as videos
            on users.userid = videos.userid
            
        LEFT JOIN (SELECT users.userid, 
                JSON_AGG(json_build_object(
                'videoid', favourites.videoid,
                'videourl', favourites.videourl,
                'favourites', favourites.favourites,
                'clicks', favourites.clicks,
                'timeinminutes', favourites.timeinminutes,
                'vegetarian', favourites.vegetarian,
                'added', favourites.added,
                'videoname', favourites.videoname,
                'channelname', favourites.channelname,
                'ingredients', ingredientsFav.json_agg
                )) as favourites
            FROM users 
            JOIN userfavouritevideo on userfavouritevideo.userid = users.userid
            JOIN videos AS favourites ON favourites.videoid = userfavouritevideo.videoid
            
            LEFT JOIN (SELECT favouritesArray.videoid, favouritesArray.json_agg
                    from (SELECT videos.*, users.username, JSON_AGG(json_build_object(
                                'ingredientid', ingredients.ingredientid,
                                'produceid', produce.produceid,
                                'producename', produce.producename,
                                'price', produce.price,
                                'calories', produce.calories,
                                'quantity', ingredients.quantity
                                )) 
                            FROM videos 
                            JOIN users on users.userid = videos.userid
                            JOIN ingredients on videos.videoid = ingredients.videoid 
                            JOIN produce on  ingredients.produceid = produce.produceid
                            GROUP BY videos.videoid, users.username) as favouritesArray
                    ) AS ingredientsFav
                ON ingredientsFav.videoid = favourites.videoid
            WHERE users.username = $1
            GROUP BY users.userid) as favourites
            ON users.userid = favourites.userid
        WHERE users.username = $1
    `, [username]
    )

    return user.rows[0]
}

const deleteUser = async(id: User["id"]) => {
    await pool.query(
        "DELETE FROM users WHERE userid = $1", [id]
    )
}

const addFavouriteVideo = async(userId: User['id'], videoId: Video['id']) => {
    await pool.query(
        "INSERT INTO userfavouritevideo (userid, videoid) VALUES($1, $2)",
        [userId, videoId]
        )
}

const removeFavouriteVideo = async(userId: User['id'], videoId: Video['id']) => {
    await pool.query(
        "DELETE FROM userfavouritevideo WHERE userid = $1 AND videoid = $2",
        [userId, videoId]
        )
}
export default {addUser, getUser, deleteUser, addFavouriteVideo, removeFavouriteVideo, getLoginUser}