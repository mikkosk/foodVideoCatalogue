import express from 'express'
import produceService from '../services/produceService';
import userService from '../services/userService';
import { toNewUser } from '../utils/parser';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const newUser = toNewUser(req.body);
        const addedUser = await userService.addUser(newUser);
        res.json(addedUser)
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await userService.deleteUser(Number(req.params.id))
    } catch(e) {
        res.status(400).send(e.message)
    }

    res.status(204).end()
})

router.post('/:userid/favourite/:videoid', async(req, res) => {
    try {
        await userService.favouriteVideo(Number(req.params.userid), Number(req.params.videoid))
        res.status(204).end()
    } catch(e) {
        res.status(400).send(e.message)
    }
})

export default router