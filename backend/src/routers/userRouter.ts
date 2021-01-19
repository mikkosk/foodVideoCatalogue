import express from 'express'
import userService from '../services/userService';
import { userObject } from '../utils/databaseToObject';
import { toNewUser } from '../utils/parser';
import { decodedToken } from '../utils/userManagement';

const router = express.Router();


router.get('/:id', async (req, res) => {
    try {
        const result = await userService.getUser(Number(req.params.id))
        const user = userObject(result)
        res.json(user)
    } catch (e) {
        res.status(400).send(e.message)
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = toNewUser(req.body);
        const result = await userService.addUser(newUser);
        const addedUser = userObject(result)
        res.json(addedUser)
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const token = decodedToken(req.headers.authorization);

        if(req.params.id !== token.id) {
            res.status(401).send("No authorization to delete the user");
            return;
        }

        await userService.deleteUser(Number(req.params.id))
    } catch(e) {
        res.status(400).send(e.message)
    }

    res.status(204).end()
})

router.post('/:userid/favourite/:videoid', async(req, res) => {
    try {
        const token = decodedToken(req.headers.authorization);

        if(req.params.userid !== token.id) {
            throw new Error
        }

    } catch(e) {
        res.status(401).send("No authorization to add favourtire video");
    }

    try {
        await userService.addFavouriteVideo(Number(req.params.userid), Number(req.params.videoid))
        res.status(204).end()
    } catch(e) {
        res.status(400).send(e.message)
    }
})

router.delete('/:userid/favourite/:videoid', async(req, res) => {
    try {
        const token = decodedToken(req.headers.authorization);

        if(req.params.userid !== token.id) {
            throw new Error
        }
    } catch(e) {
        res.status(401).send("No authorization to remove favourtire video");
    }
    
    try {
        await userService.removeFavouriteVideo(Number(req.params.userid), Number(req.params.videoid))
        res.status(204).end()
    } catch(e) {
        res.status(400).send(e.message)
    }
})

export default router