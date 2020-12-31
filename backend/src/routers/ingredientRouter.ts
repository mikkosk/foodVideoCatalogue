import express from 'express';
import ingredientService from '../services/ingredientService';
import { Ingredient, newIngredient } from '../types';
import { toNewIngredient } from '../utils/parser';

const router = express.Router()

router.post('/', async (req, res) => {
    var newIngredients: newIngredient[] = []

    const addNew = (ingredient: any) => {
        console.log(ingredient)
        const newIngredient = toNewIngredient(ingredient);
        newIngredients = newIngredients.concat(newIngredient)
    }

    try {
        const allIngredients: any[] = req.body.ingredients
        allIngredients.forEach(i => {addNew(i)})
        console.log("Router")
        const addedIngredient = await ingredientService.addIngredients(newIngredients);
        res.json(addedIngredient)
    } catch (e) {
        res.status(400).send(e.message);
    }
});

export default router