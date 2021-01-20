import express from 'express';
import { toNewVideo } from '../utils/parser';
import videoService from '../services/videoService';
import { decodedToken } from '../utils/userManagement';
import { APIResult, NewVideoWithYTInfo, VideoQuery, VideoWithIngredients } from '../types';
import { videoObject } from '../utils/databaseToObject';
import axios from 'axios'


const router = express.Router();

router.post('/', async (req, res) => {
    var token;

    try {
        token = decodedToken(req.headers.authorization);

        if(!token.id) {
            throw new Error
        }

    } catch (e) {
        res.status(401).send("No authorization to add video");
        return;
    }

    try{
        const newVideo = toNewVideo(req.body);

        const result = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${newVideo.videoUrl.replace('https://www.youtube.com/watch?v=','')}&key=${process.env.API_SECRET}`)
        const ytResult: APIResult = result.data
        if(!ytResult) {
            throw new Error("We can't confirm if the video exists at the moment. Please try again later!")
        } else if(ytResult.pageInfo.totalResults !== 1) {
            throw new Error("Video was not found!")
        } else {
            const videoName = ytResult.items[0].snippet.title
            const channelName = ytResult.items[0].snippet.channelTitle
            const newVideoWithInfo: NewVideoWithYTInfo = {...newVideo, videoName, channelName}
            const userId = Number(token.id);
            const result = await videoService.addVideo(newVideoWithInfo, userId);
            const addedVideo = videoObject(result)
            res.json(addedVideo)
        }
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.get('/:videoId', async(req, res) => {
    try{
        const videoId = req.params.videoId;
        const result = await videoService.getVideo(Number(videoId));
        const video = videoObject(result)
        res.json(video)
    } catch(e) {
        res.status(400).send(e.message);
    }
})

router.post('/get', async(req, res) => {
    try{
        const videoQuery: VideoQuery = req.body;
        const result = await videoService.getVideos(videoQuery);
        const videos = result.map((video: VideoWithIngredients) => videoObject(video))
        res.json(videos)
    } catch(e) {
        res.status(400).send(e.message);
    }
})


router.get('/', async(req, res) => {
    try{

        const result = await videoService.getVideos({});
        const videos = result.map((result: VideoWithIngredients) => videoObject(result))
        res.json(videos)
    } catch(e) {
        res.status(400).send(e.message);
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const token = decodedToken(req.headers.authorization);
        const result = await videoService.getVideo(Number(req.params.id))
        const video = videoObject(result)

        if(video.userId === Number(token.id)) {
            res.status(401).send("No authorization to add video");
            return;
        }

        await videoService.deleteVideo(Number(req.params.id))
    } catch(e) {
        res.status(400).send(e.message)
    }

    res.status(204).end()
})


router.put('/:id/click', async (req, res) => {
    try {
        const result = await videoService.addClick(Number(req.params.id))
        const updatedVideo = videoObject(result)
        res.json(updatedVideo)
    } catch(e) {
        res.status(400).send(e.message)
    }
})

router.put('/:id/favourite/add', async (req, res) => {
    try {
        const result = await videoService.addFavourite(Number(req.params.id))
        const updatedVideo = videoObject(result)
        res.json(updatedVideo)
    } catch(e) {
        res.status(400).send(e.message)
    }
})

router.put('/:id/favourite/remove', async (req, res) => {
    try {
        const result = await videoService.removeFavourite(Number(req.params.id))
        const updatedVideo = videoObject(result)
        res.json(updatedVideo)
    } catch(e) {
        res.status(400).send(e.message)
    }
})

export default router;

