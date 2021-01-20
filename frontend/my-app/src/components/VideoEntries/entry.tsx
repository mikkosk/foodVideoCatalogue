import React from 'react'
import { useHistory } from 'react-router-dom'
import { Ingredient, Video } from '../../types'


export const VideoEntry: React.FC<{video: Video}> = ({video}) => {

    const history = useHistory()
    const compareIngredients = (a: Ingredient, b: Ingredient) => {
        return (b.quantity) - (a.quantity)
    }

    const mostUsedIngredients = (): Ingredient[] => {
        const len = video.ingredients.length
        if(len <= 2) return video.ingredients
        const sortedIng = video.ingredients.slice().sort((a, b) => compareIngredients(a, b))
        const max = len > 3 ? 2 : sortedIng.length - 1
        return sortedIng.slice(0, max)
    }

    const calories = (): Number => {
        var calories = 0
        video.ingredients.forEach((i: Ingredient) => calories += (i.produce.caloriesPerGram * i.quantity))
        return calories
    }
    
    const price = (): Number => {
        var price = 0
        video.ingredients.forEach((i: Ingredient) => price += (i.produce.pricePerGram * i.quantity))
        return price/100
    }

    return (
        <section className="grid-video-entry top-margin">
            <div className="bar lighter start-f start-m"/>
            <div className="bar bar-button lighter">
                <p onClick={() => history.push(`/video/${video.id}`)}>{video.videoName}</p>
            </div>
            <div className="bar">
                <p>{video.channelName}</p>
            </div>
            <div className="full-screen-only">
                <a href={video.videoUrl} title={video.videoUrl}>
                    <div className="bar bar-button lighter full-screen-only">
                        <p>To video!</p>
                    </div>
                </a>
            </div>
            <div className="bar full-screen-only">
                <div>
                    {mostUsedIngredients().map((ing: Ingredient) => {
                        return <p key={ing.id}>{ing.produce.produceName}</p>
                    })}
                </div>
            </div>
            <div className="bar lighter">
                <p>{calories()}</p>
            </div>
            <div className="bar ">
                <p>{price()}€</p>
            </div>
            <div className="bar lighter">
                <p>{video.timeInMinutes}</p>
            </div>
            <div className="bar full-screen-only">
                <p>{video.vegetarian ? "Yes" : "No"}</p>
            </div>
            <div className="bar lighter full-screen-only">
                <p>{video.favourites}</p>
            </div>
            <div className="bar full-screen-only">
                <p>{video.clicks}</p>
            </div>
            <div className="bar lighter full-screen-only">
                <p>{new Date(Number(video.added)).toDateString()}</p>
            </div>
            <div className="bar full-screen-only">
                <p>{video.username}</p>
            </div>
            <div className="bar end-f end-m lighter-m"/>
        </section>
    )
}