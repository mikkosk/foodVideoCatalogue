import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addNotification, removeNotification } from '../../reducers/notificationReducer'
import { setUser } from '../../reducers/userReducer'
import userService from '../../services/userService'
import { AppDispatch, RootState, useAppDispatch } from '../../store'
import { EntryTable } from '../VideoEntries/entryTable'

export const UserPage: React.FC = () => {
    const { userid } = useParams<{ userid: string }>()
    const [addedSelected, setAddedSelected] = useState(true)

    const dispatch: AppDispatch = useAppDispatch()
    const user = useSelector((state: RootState) => state.users.users[Number(userid)])

    useEffect(() => {
        const waitDispatch = async() => {
            try {
                const result = await userService.getUser(Number(userid))
                dispatch(setUser(result))
            } catch (e) {
                dispatch(addNotification({message: e.response.data, error: true}))
                setTimeout(() => dispatch(removeNotification()), 2000)
            } 
        };
        waitDispatch()
    }, [dispatch, userid])

    if(!user || (user && !user)) {
        return <div/>
    }

    if(user) {
        return(
            <div>
                <div className="center-text">
                    <h1>{user.username}'s videos</h1>
                </div>
                <div className="radio-button center-text">
                    <button className={addedSelected ? "darker start-m start-f darken-hover" : "bar start-m start-f darken-hover"} onClick={() => setAddedSelected(true)}>Added</button>
                    <button className={addedSelected ? "bar end-m end-f darken-hover" : "darker end-m end-f darken-hover"} onClick={() => setAddedSelected(false)}>Favourites</button>
                </div>
                {addedSelected && 
                <div className="top-padding">
                    <EntryTable videos={user.videos} />
                </div>
                }
                {!addedSelected && 
                <div className="top-padding">
                    <EntryTable videos={user.favouriteVideos} />
                </div>
                }
            </div>
        )
    }
    return <div></div>
}