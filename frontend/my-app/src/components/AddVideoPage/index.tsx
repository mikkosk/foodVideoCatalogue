import React, { FormEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addNotification, removeNotification } from '../../reducers/notificationReducer'
import { setProduce } from '../../reducers/produceReducer'
import produceService from '../../services/produceService'
import videoService from '../../services/videoService'
import { RootState, useAppDispatch } from '../../store'
import { newIngredient, newVideo, Video } from '../../types'
import AddProduce from '../AddProduce'

const AddVideoPage: React.FC = () => {
    const [openAdd, setOpenAdd] = useState(false)
    const [link, setLink] = useState('')
    const [linkError, setLinkError] = useState(false)
    const [time, setTime] = useState('')
    const [search, setSearch] = useState('')
    const [grams, setGrams] = useState('')
    const [ingredients, setIngredients] = useState<{id: number, produceId: number, produceName: string, quantity: number}[]>([])
    const [minutesError, setMinutesError] = useState(false)
    const [gramsError, setGramsError] = useState(false)
    const [vegetarian, setVegetarian] = useState(false)
    const [ingPro, setIngPro] = useState<number|undefined>(undefined)

    const produce = useSelector((state: RootState) => state.produce.produce)
    const user = useSelector((state: RootState) => state.login.user)

    const history = useHistory()
    const dispatch = useAppDispatch()

    const showNotification = (message: string, error: boolean) => {
        dispatch(addNotification({message, error}))
        setTimeout(() => dispatch(removeNotification()), 2000)
    }

    useEffect(() => {
        const waitForDispatch = async() => {
            try {
                const result = await produceService.getProduce()
                dispatch(setProduce(result))
            } catch (e) {
                dispatch(addNotification({message: e.response?.data || e.message, error: true}))
                setTimeout(() => dispatch(removeNotification()), 2000)
            }
        }

        waitForDispatch()
    }, [dispatch])


    useEffect(() => {
        if(!Number.isInteger(Number(grams))) {
            setGramsError(true)
        } else {
            setGramsError(false)
        }
    }, [grams])

    useEffect(() => {
        if(!Number.isInteger(Number(time))) {
            setMinutesError(true)
        } else {
            setMinutesError(false)
        }
    }, [time])

    useEffect(() => {
        if(link.startsWith('https://www.youtube.com/watch?v=')) {
            setLinkError(false)
        } else {
            setLinkError(true)
        }
    }, [link])

    const submitIngredient = () => {

        if(gramsError || !grams || !ingPro) {
            return
        }

        const ingredient: {id: number, produceId: number, produceName: string, quantity: number} = {
            produceId: ingPro,
            produceName: produce[ingPro]?.produceName || '',
            quantity: Number(grams),
            id: Math.random()
        }

        setIngredients(ingredients.concat(ingredient))
        setGrams('');
        (document.getElementById('grams-input') as HTMLInputElement).value = ""
    }

    const submit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(user) {
            try {
                const newVideo: newVideo = {
                    userId: user.id,
                    username: user.username,
                    videoUrl: link,
                    timeInMinutes: Number(time),
                    vegetarian: vegetarian,
                    added: Date.now()
                }
                const video: Video = await videoService.addVideo(newVideo);
                
                const newIngredients: newIngredient[] = ingredients.map((i) => {
                    const ing = {
                        produceId: i.produceId,
                        quantity: i.quantity,
                        videoId: video.id
                    }
                    return ing
                })

                await videoService.addIngredient(newIngredients)
                showNotification(`${link} added!`, false)
                setVegetarian(false)
                setLink('')
                setTime('')
                setIngredients([]);
                (document.getElementById('time-input') as HTMLInputElement).value = "";
                (document.getElementById('link-input') as HTMLInputElement).value = "";
                (document.getElementById('veg-input') as HTMLInputElement).checked = false;
                history.push('/search')
            } catch (e) {
                showNotification(e.response.data, true)
            }
        }
    }

    if(!user || !user.id) {
        return(
            <div className="center-text form-background">
                <h1> Only registered users may add videos. Please login!</h1>
            </div>
        )
    }

    return(
        <div>
            <form onSubmit={submit} className="grid-add-video form-background">
                <div className="top-padding half">
                    <div>
                        <p>Link to video </p>
                        <span>(must start with </span>
                        <span style={{color: 'red'}}>https://www.youtube.com/watch?v=</span>
                        <span> ): </span>
                    </div>
                    <input className="text-input" id="link-input" onChange={({target}) => (setLink(target.value))}></input>
                </div>
                <div>
                    <span>Cooking time (in minutes): </span>
                    <input className="text-input" id="time-input" type="number" min="1" max="100000" step="1" onChange={({target}) => (setTime(target.value))}></input>
                    {minutesError && <span style={{color: 'red'}}>Must be a integer!</span>}
                </div>
                <div>
                    <p>Recipe is suitable for vegetarians? </p>
                    <input id="veg-input" className="checkbox" type="checkbox" onChange={({target}) => (setVegetarian(target.checked))}></input>
                </div>
                <div>
                    <h1>Ingredients:</h1>
                    {ingredients.map((i) => {
                        return(
                            <div key={i.id} className="top-padding">
                                <span>{i.quantity}g of {i.produceName}</span>
                                <button className="remove-button"onClick={() => setIngredients(ingredients.filter((ing) => ing.id !== i.id))}></button>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <section className="ingredient-grid">
                        <h1>Add ingredient</h1>
                        <div className="top-margin">
                            <input className="text-input round-top set-width as-ablock"onChange={({target}) => (setSearch(target.value))} placeholder='Search for produce...'></input>
                            <select className="text-input round-bottom set-width as-abloc" defaultValue={undefined} onChange={({target}) => (setIngPro(Number(target.value)))}>
                                <option value={undefined}>Choose produce...</option>
                                {Object.values(produce).filter((p) => 
                                p.produceName.toLowerCase().includes(search.toLowerCase()) || !search)
                                .sort((a, b) => a.produceName.toLowerCase() <= b.produceName.toLowerCase() ? -1 : 1)
                                .map((p) => {
                                    return(
                                    <option key={p.id} value={p.id}>{p.produceName}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="top-margin">
                            <p>How many grams?</p>
                            <input className="text-input" id="grams-input" type="number" min="1" max="100000" step="1" onChange={(({target}) => (setGrams(target.value)))}></input>
                            {gramsError && <p style={{color: 'red'}}>Must be a integer!</p>}
                        </div>
                        <button className="add-button top-margin" type="button" disabled={(gramsError || !grams || !ingPro)} onClick={() => submitIngredient()}> Add ingredient</button>
                    </section>
                </div>
                <div className="wider">
                    <div className="button-group">
                        <div/>
                        <span className="darker start-m start-f">Add produce</span>
                        <button className="open-button darker end-m end-f" type="button" onClick={() => setOpenAdd(!openAdd)}>{openAdd ? '-' : '+'}</button>
                    </div>
                    {openAdd && 
                        <AddProduce />
                    }
                </div>
                <div>
                   <button className="add-button" disabled={(!time|| !link || linkError || minutesError)} type="submit">
                       Add video!
                    </button>
                </div>
            </form>

        </div>
    )
}

export default AddVideoPage