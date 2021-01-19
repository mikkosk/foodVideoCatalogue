import { QueryResult } from "pg";
import { DatabaseVideo, newVideo, NewVideoWithYTInfo, User, Video, VideoQuery, VideoWithIngredients } from "../types";
import pool from "../db";

const addVideo = async (entry: NewVideoWithYTInfo, user: User['id']): Promise<DatabaseVideo> => {
    const {videoUrl, timeInMinutes, vegetarian, added, videoName, channelName} = entry

    const newVideo: QueryResult = await pool.query(
        "INSERT INTO videos (userId, videoUrl, timeInMinutes, vegetarian, added, videoname, channelname) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [user, videoUrl, timeInMinutes, vegetarian, added, videoName, channelName]
    );
    return newVideo.rows[0];
};

const addClick = async(id: User['id']): Promise<DatabaseVideo> => {
    const updatedVideo: QueryResult = await pool.query(
        "UPDATE videos SET clicks = clicks + 1 WHERE videoid = $1 RETURNING *", [id]
    );
    return updatedVideo.rows[0];
}

const addFavourite = async(id: User['id']): Promise<DatabaseVideo> => {
    const updatedVideo: QueryResult = await pool.query(
        "UPDATE videos SET favourites = favourites + 1 WHERE videoid = $1 RETURNING *", [id]
    );
    return updatedVideo.rows[0];
}

const removeFavourite = async(id: User['id']): Promise<DatabaseVideo> => {
    const updatedVideo: QueryResult = await pool.query(
        "UPDATE videos SET favourites = favourites - 1 WHERE videoid = $1 RETURNING *", [id]
    );
    return updatedVideo.rows[0];
}

const getVideo = async (videoId: Video['id']): Promise<VideoWithIngredients> => {
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
        LEFT JOIN ingredients on videos.videoid = ingredients.videoid 
        join produce on  ingredients.produceid = produce.produceid
        WHERE videos.videoid = $1
        GROUP BY videos.videoid`, 
        [videoId]
    )
    return video.rows[0]
}

const getVideos = async (parameters: VideoQuery): Promise<VideoWithIngredients[]> => {
    var i = 1;
    var previousRestriction: boolean = false;
    var restrictions = ''
    const {ids, users, minClicks, maxClicks, minFavourites, maxFavourites, videos, ingredients} = parameters
    const values = new Array().concat(
        (ingredients),
        ids, 
        users, 
        (minClicks ? (minClicks < 0 ? 0 : minClicks) : null),
        (maxClicks ? (maxClicks > 2147483647 ? 2147483647 : maxClicks) : null),
        (minFavourites ? (minFavourites < 0 ? 0 : minFavourites) : null),
        (maxFavourites ? (maxFavourites > 2147483647 ? 2147483647 : maxFavourites) : null),
        (videos)
        ).filter((v) => v != null)

    const newRes = () => {
        if(previousRestriction) {
            restrictions += `\nAND `
        } else {
            restrictions += `WHERE `
        }
        previousRestriction = true;
    }

    if(ingredients && ingredients.length > 0) {
        var bool: boolean = false;
        restrictions += `
        JOIN (SELECT videos.videoid from videos
			JOIN ingredients on videos.videoid = ingredients.videoid 
            JOIN produce on ingredients.produceid = produce.produceid
            WHERE `
        ingredients.forEach((ing: string) => {
            if(bool) {
                restrictions += `\nOR `
            } else {
                bool = true; 
            }
            restrictions += `LOWER ( produce.producename ) LIKE $${i}`
            i++;
        })
        restrictions += 
        ` GROUP BY videos.videoid) AS vidpro ON vidpro.videoid = videos.videoid `
    }
    
    if(ids && ids.length > 0) {
        newRes()
        var bool: boolean = false;
        ids.forEach((n: number) => {
            if(bool) {
                restrictions += `\nOR `
            } else {
                bool = true;
            }
            restrictions += `videos.videoid = $${i}`
            i++;
        })
    }

    if(users && users.length > 0) {
        newRes()
        var bool: boolean = false;
        users.forEach((n: string) => {
            if(bool) {
                restrictions += `\nOR `
            } else {
                bool = true;
            }
            restrictions += `LOWER ( users.username ) = $${i}`
            i++;
        })
    }

    if(minClicks) {
        newRes()
        restrictions += `videos.clicks >= $${i}`
        i++;
    }

    if(maxClicks) {
        newRes()
        restrictions += `videos.clicks <= $${i}`
        i++;
    }

    if(minFavourites) {
        newRes()
        restrictions += `videos.clicks >= $${i}`
        i++;
    }

    if(maxFavourites) {
        newRes()
        restrictions += `videos.clicks <= $${i}`
        i++;
    }

    if(videos && videos.length > 0) {
        newRes()
        var bool: boolean = false;
        videos.forEach((vid: string) => {
            if(bool) {
                restrictions += `\nOR `
            } else {
                bool = true;
            }
            restrictions += `LOWER ( videos.videoname ) LIKE $${i} `
            i++;
        })
    }

    const videosResult: QueryResult = await pool.query(
        `SELECT videos.*, users.username, JSON_AGG(json_build_object(
            'ingredientid', ingredients.ingredientid,
            'produceid', produce.produceid,
            'producename', produce.producename,
            'price', produce.price,
            'calories', produce.calories,
            'quantity', ingredients.quantity
            )) AS ingredients
        FROM videos 
        JOIN users on users.userid = videos.userid
        LEFT JOIN ingredients on videos.videoid = ingredients.videoid 
        LEFT JOIN produce on  ingredients.produceid = produce.produceid
        ${restrictions}
        GROUP BY videos.videoid, users.username
        LIMIT 200
        `, values
    )

    return videosResult.rows
}

const deleteVideo = async(id: Video["id"]) => {
    await pool.query(
        "DELETE FROM videos WHERE videoid = $1", [id]
    )
}
export default {addVideo, getVideo, getVideos, deleteVideo, addClick, addFavourite, removeFavourite}
