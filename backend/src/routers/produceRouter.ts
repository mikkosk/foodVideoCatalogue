import express from 'express'
import produceService from '../services/produceService';
import { DatabaseProduce } from '../types';
import { produceObject } from '../utils/databaseToObject';
import { toNewProduce } from '../utils/parser';
import { decodedToken } from '../utils/userManagement';

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const result = await produceService.getAllProduce();
        const allProduce = result.map((produce: DatabaseProduce) => produceObject(produce))
        res.json(allProduce)
    } catch(e) {
        res.status(400).send(e.message)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const result = await produceService.getProduce(Number(id));
        const allProduce = produceObject(result)
        res.json(allProduce)
    } catch(e) {
        res.status(400).send(e.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const token = decodedToken(req.headers.authorization);
        if(!token.id) {
            throw new Error('Not authorized to do this action')
        }
    } catch (e) {
        res.status(401).send(e.message);
        return;
    }
    
    try {
        const newProduce = toNewProduce(req.body);
        const result = await produceService.addProduce(newProduce);
        const addedProduce = produceObject(result)
        res.json(addedProduce)
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try{

        const token = decodedToken(req.headers.authorization);
        if(!token.id) {
            res.status(401).send("No authorization");
            return;
        }

        await produceService.deleteProduce(Number(id))
    } catch(e) {
        res.status(400).send(e.message)
    }

    res.status(204).end()
} )
export default router;