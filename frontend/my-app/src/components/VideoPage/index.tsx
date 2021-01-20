import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addNotification, removeNotification } from '../../reducers/notificationReducer'
import { setUser } from '../../reducers/userReducer'
import { setVideos } from '../../reducers/videoReducer'
import userService from '../../services/userService'
import videoService from '../../services/videoService'
import { RootState, useAppDispatch } from '../../store'
import { VideoQuery } from '../../types'

export const VideoPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const { videoid } = useParams<{ videoid: string }>()
    const video = useSelector((state: RootState) => state.videos.videos[Number(videoid)])
    const loginId = useSelector((state: RootState) => state.login.user?.id)
    const user = useSelector((state: RootState) => state.users.users[loginId || -1])
    
    const isFavourite = user?.favouriteVideos.filter((v) => v.id === Number(videoid)).length > 0

    const showNotification = (message: string, error: boolean) => {
        dispatch(addNotification({message, error}))
        setTimeout(() => dispatch(removeNotification()), 2000)
    }
    
    useEffect(() => {
        const idQuery: VideoQuery = {
            ids: [Number(videoid)]
        }
        const fetchVideos = async () => {
            const result = await videoService.getVideos(idQuery)
            dispatch(setVideos(result))
        }
        const fetchUser = async() => {
            if(loginId) {
                const result = await userService.getUser(loginId)
                dispatch(setUser(result))
            }
        }

        try {
            fetchVideos()
                
            if(loginId) {
                fetchUser()
            }
        } catch (e) {
            dispatch(addNotification({message: e.response.data , error: true}))
            setTimeout(() => dispatch(removeNotification()), 2000)
        }

    }, [dispatch, videoid, loginId])

    useEffect(() => {
        try {
            videoService.addClick(Number(videoid))
        } catch {
            return
        }
    }, [videoid])


    const addToFavourites = async() => {
        if (user && video) { 
            const idQuery: VideoQuery = {
                ids: [Number(videoid)]
            }
            try {
                await userService.addFavourite(user.id, video.id)
                const userResult = await userService.getUser(user.id)
                dispatch(setUser(userResult))
                const videoResult = await videoService.getVideos(idQuery)
                dispatch(setVideos(videoResult))
                await videoService.addFavourite(video.id)
                showNotification("Video added to favourites!", false)
            } catch(e) {
                showNotification(e.response.data, true)
            }
        }
    }

    const removeFromFavourites = async() => {
        if (user && video) { 
            const idQuery: VideoQuery = {
                ids: [Number(videoid)]
            }

            try {
                await userService.removeFavourite(user.id, video.id)
                const userResult = await userService.getUser(user.id)
                dispatch(setUser(userResult))
                const videoResult = await videoService.getVideos(idQuery)
                dispatch(setVideos(videoResult))
                await videoService.removeFavourite(video.id)
                showNotification("Video removed from favourites", false)
            } catch(e) {
                showNotification(e.response.data, true)
            }
        }
    }

    if(!video) {
        return(
            <div>
                <h1>No video found!</h1>
            </div>
        )
    }

    return(
        <div>
            <section className="form-background center-text top-padding bottom-padding">
                <div className="inside-background">
                    <div className="side-margin">
                        <div>
                            <h1>{video.videoName}</h1>
                            <p>By: {video.channelName}</p>
                        </div>
                        <div>
                            <a href={video.videoUrl}>{video.videoUrl}</a>
                        </div>
                    </div>
                </div>
                <div className="inside-background top-margin">
                    <div className="side-margin">
                        <div>
                            <h1>Ingredients</h1>
                            <div className="top-margin">
                                {video.ingredients.map((i) => {
                                    return (
                                        <p key={i.id}>{i.quantity}g of {i.produce.produceName}</p>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="top-margin">
                            <p>Cooking time: {video.timeInMinutes}</p>
                        </div>
                        <div>
                            <p>Calories: {video.ingredients.reduce((memo, i) => memo + (i.produce.caloriesPerGram * i.quantity), 0)} kcal</p>
                        </div>
                        <div>
                            <p>Price: {video.ingredients.reduce((memo, i) => memo + (i.produce.pricePerGram * i.quantity), 0) / 100}€</p>
                        </div>
                        <div className="top-margin">
                            <p>Recipe is vegetarian: {video.vegetarian ? 'YES' : 'NO'}</p>
                        </div>
                    </div>
                </div>

                <div className="inside-background top-margin">
                   <p>Added by: {video.username}</p>
                   <p>On {new Date(Number(video.added)).toDateString()}</p>
                </div>

                <div className="top-margin">
                    {(user && user.id) &&
                        <div>
                            {!isFavourite && <button className="add-button" onClick={() => addToFavourites()}>Add to favourites!</button>}
                            {isFavourite && <button className="add-button" onClick={() => removeFromFavourites()}>Remove from favourites!</button>}
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}