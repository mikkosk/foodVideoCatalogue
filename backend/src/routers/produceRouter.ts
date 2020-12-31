import express from 'express'
import produceService from '../services/produceService';
import { toNewProduce } from '../utils/parser';

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const allProduce = await produceService.getAllProduce();
        res.json(allProduce)
    } catch(e) {
        res.status(400).send(e.message)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const allProduce = await produceService.getProduce(Number(id));
        res.json(allProduce)
    } catch(e) {
        res.status(400).send(e.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const newProduce = toNewProduce(req.body);
        const addedProduce = await produceService.addProduce(newProduce);
        res.json(addedProduce)
    } catch (e) {
        res.status(400).send(e.message);
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        await produceService.deleteProduce(Number(id))
    } catch(e) {
        res.status(400).send(e.message)
    }

    res.status(204).end()
} )
export default router;