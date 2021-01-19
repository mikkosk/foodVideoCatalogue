import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userService from '../services/userService';
import express from 'express';
import { Token } from '../utils/userManagement';
import { User } from '../types';
import { userObject } from '../utils/databaseToObject';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const result = await userService.getLoginUser(req.body.username);

        const user = userObject(result)

        const rightCredentials = user === null
            ? false
            : await bcrypt.compare(req.body.password, user.hashcode);

        if(!(user && rightCredentials)) {
            res.status(401).send("False credentials");
            return;
        }

        const userToken: Token = {
            user: user.username,
            id: String(user.id)
        };

        if(!process.env.SECRET) {
            res.status(500).send("Unexplained problem");
            return;
        }

        const token = jwt.sign(userToken, process.env.SECRET);

        const {id, username, hashcode, favouriteVideos, videos} = user;
        const loggedInUser: User & {token: string} = {
            token,
            username,
            id,
            hashcode,
            favouriteVideos,
            videos
        };
        res.status(200).send(loggedInUser);
        
    } catch (e) {
        res.status(400).send(e.message);
    }
});


export default router;
