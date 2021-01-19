import express from 'express';
import ingredientService from '../services/ingredientService';
import { DatabaseIngredient, newIngredient } from '../types';
import { ingredientObject } from '../utils/databaseToObject';
import { toNewIngredient } from '../utils/parser';
import { decodedToken } from '../utils/userManagement';

const router = express.Router()

router.post('/', async (req, res) => {
    var newIngredients: newIngredient[] = []

    const addNew = (ingredient: any) => {
        const newIngredient = toNewIngredient(ingredient);
        newIngredients = newIngredients.concat(newIngredient)
    }

    var token;

    try {
        token = decodedToken(req.headers.authorization);
        if(!token.id) {
            throw new Error;
        }
    } catch (e) {
        res.status(401).send("No authorization");
        return;
    }
    
    try {
        const allIngredients: newIngredient[] = req.body
        allIngredients.forEach(i => {addNew(i)})

        const result = await ingredientService.addIngredients(newIngredients);
        const addedIngredient = result.map((ingredient: DatabaseIngredient) => ingredientObject(ingredient))

        res.json(addedIngredient)
        
    } catch (e) {
        res.status(400).send(e.message);
    }
});

export default router