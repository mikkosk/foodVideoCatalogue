import express from 'express';
import { toNewVideo } from '../utils/parser';
import videoService from '../services/videoService';


const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newVideo = toNewVideo(req.body.video);
        const userId = Number(req.headers.authorization)
        const addedVideo = await videoService.addVideo(newVideo, userId);
        res.json(addedVideo)
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.get('/:videoId', async(req, res) => {
    try{
        const videoId = req.params.videoId;
        const video = await videoService.getVideo(Number(videoId));
        res.json(video)
    } catch(e) {
        res.status(400).send(e.message);
    }
})

router.get('/', async(req, res) => {
    try{
        const videos = await videoService.getVideos();
        res.json(videos)
    } catch(e) {
        res.status(400).send(e.message);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await videoService.deleteVideo(Number(req.params.id))
    } catch(e) {
        res.status(400).send(e.message)
    }

    res.status(204).end()
})

router.put('/:id/click', async (req, res) => {
    try {
        const updatedVideo = await videoService.addClick(Number(req.params.id))
        res.json(updatedVideo)
    } catch(e) {
        res.status(400).send(e.message)
    }
})

export default router;

