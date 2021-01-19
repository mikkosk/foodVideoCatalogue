import React, { useState } from 'react'
import { addNotification, removeNotification } from '../../reducers/notificationReducer'
import { setProduce } from '../../reducers/produceReducer'
import produceService from '../../services/produceService'
import { useAppDispatch } from '../../store'

const AddProduce: React.FC = () => {
    const [name, setName] = useState('')
    const [calories, setCalories] = useState('')
    const [price, setPrice] = useState('')
    
    const dispatch = useAppDispatch()

    const showNotification = (message: string, error: boolean) => {
        dispatch(addNotification({message, error}))
        setTimeout(() => dispatch(removeNotification()), 2000)
    }


    const suitableValues: boolean = 
        Boolean(name && 
        calories.length > 0 && Number.isFinite(Number(calories)) && Number(calories) > -1 && Number(calories) < 10 &&
        price.length > 0 && Number.isFinite(Number(price)) && Number(price) > -1 && Number(price) < 1000) 

    const submitProduce = async () => {
        if(suitableValues) {
            
            try {
                const produce = await produceService.addProduce({produceName: name, caloriesPerGram: Number(calories), pricePerGram: Number(price)})
                dispatch(setProduce(produce))
                setName("")
                setCalories("")
                setPrice("");
                (document.getElementById("produce-name-input") as HTMLInputElement).value = "";
                (document.getElementById("produce-calories-input") as HTMLInputElement).value = "";
                (document.getElementById("produce-price-input") as HTMLInputElement).value = "";
                showNotification(`${name} added!`, false)
            } catch (e) {
                showNotification(e.response.data, true)
            }

        } else {
            throw new Error("Name can't be left empty. Price has to be float. Calories has to be integer.")
        }

    }

    return(
        <div className='add-produce-grid top-padding'>
            <div>
                <p>Produce name:</p>
                <input className="text-input half" id="produce-name-input" onChange={({target}) => (setName(target.value))}></input>
            </div>
            <div>
                <p>Calories (kcal/1g) :</p>
                <input className="text-input half" id="produce-calories-input" type="number" min="0" max="9" onChange={({target}) => (setCalories(target.value))}></input>
            </div>
            <div>
                <p>Price (cent/1g):</p>
                <input className="text-input half" id="produce-price-input" type="number" min="0" max="100000" onChange={({target}) => (setPrice(target.value))}></input>
            </div>
            <div>
                <button className="add-button" type="button" disabled={!suitableValues} onClick={() => submitProduce()}>Add!</button>
            </div>
            <div>
                {!suitableValues &&
                    <p style={{color: 'red'}}>Check that every input is filled with suitable values!</p>}
            </div>
        </div>
    )
}

export default AddProduce