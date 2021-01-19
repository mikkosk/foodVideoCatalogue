import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { addNotification, removeNotification } from '../../reducers/notificationReducer'
import { setVideos } from '../../reducers/videoReducer'
import videoService from '../../services/videoService'
import { RootState, useAppDispatch } from '../../store'
import { VideoQuery } from '../../types'
import { EntryTable } from '../VideoEntries/entryTable'

interface Search {
    field: string,
    search: string,
    id: number
}
export const SearchPage: React.FC = () => {
    const videos = useSelector((state: RootState) => state.videos.videos)
    const dispatch = useAppDispatch()

    const [field, setField] = useState('User')
    const [searchList, setSearchList] = useState<Search[]>([])
    const [search, setSearch] = useState('')

    const showNotification = (message: string, error: boolean) => {
        dispatch(addNotification({message, error}))
        setTimeout(() => dispatch(removeNotification()), 2000)
    }

    useEffect(() => {
        const waitDispatch = async() => {
            try {
                const result = await videoService.getVideos({})
                dispatch(setVideos(result))
            } catch (e) {
                dispatch(addNotification({message: e.response.data, error: true}))
                setTimeout(() => dispatch(removeNotification()), 2000)
            }
        };
        waitDispatch()
    },[dispatch])

    const addSearch = () => {
        if(search) {
            const s = {id: Math.random(), field, search}
            if(field === 'User' || field === 'Video' || field === 'Ingredient' || Number.isInteger(Number(search))) {
                setSearchList(searchList.concat(s));
                (document.getElementById("search-input") as HTMLInputElement).value = ""
                setSearch('')
            } else {
               showNotification("Must be integer", true)
            }
        } else {
            showNotification("Search can't be empty", true)
        }
    }


    const completeSearch = async () => {
        const parameters: VideoQuery = {}
        searchList.forEach((s: Search) => {
            switch(s.field) {
                case 'User':
                    parameters.users = parameters.users ? parameters.users.concat(s.search.toLowerCase()) : parameters.users = [s.search.toLowerCase()]
                    break;
                case 'Video':
                    parameters.videos = parameters.videos ? parameters.videos.concat(`%${s.search.toLowerCase()}%`) : parameters.videos = [`%${s.search.toLowerCase()}%`]
                    break;
                case 'Clicks (min)':
                    parameters.minClicks = Number(s.search)
                    break;
                case 'Clicks (max)':
                    parameters.maxClicks = Number(s.search)
                    break;
                case 'Favourites (min)':
                    parameters.minFavourites = Number(s.search)
                    break;
                case 'Favourites (max)':
                    parameters.maxFavourites = Number(s.search)
                    break;
                case 'Ingredient':
                    parameters.ingredients = parameters.ingredients ? parameters.ingredients.concat(`%${s.search.toLowerCase()}%`) : parameters.ingredients = [`%${s.search.toLowerCase()}%`]
                    break;
            }
        })
        try {
            const result = await videoService.getVideos(parameters)
            dispatch(setVideos(result))
        } catch (e) {
            showNotification(e.response.data, true)
        }

    }


    return(
        <div>
            <div>
                <div className="center-text search-page-grid form-background">
                    <div className="search-module-grid">
                        <p className="top-margin">Search:</p>
                        <div className="search-bar-grid">
                            <div className="darker open-button start-m start-f vertical">
                                <select className="side-margin transparent"onChange={({target}) => setField(target.value)}>
                                    <option value='User'>By adding user</option>
                                    <option value='Video'>By video</option>
                                    <option value='Clicks (min)'>By clicks (min)</option>
                                    <option value='Clicks (max)'>By clicks (max)</option>
                                    <option value='Favourites (min)'>By favourites (min)</option>
                                    <option value='Favourites (max)'>By favourites (max)</option>
                                    <option value='Ingredient'>By ingredient</option>
                                </select>
                            </div>
                            <div className="darker">
                                <input className="text-input white-text" placeholder="Search..." id="search-input" onChange={({target}) => setSearch(target.value)}></input>
                            </div>
                            <button className="darker end-f end-m open-button vertical"onClick={() => addSearch()}>Add</button>
                        </div>
                    </div>
                    <div className="inside-background">
                        <p className="bottom-margin">Current search: </p>
                        {searchList.map((s: Search) => 
                            <div key={s.id}>
                                <span>{s.field} = {s.search} </span>
                                <button className="remove-button"onClick={() => setSearchList(searchList.filter((l) => l.id !== s.id))}></button>
                            </div>)}
                    </div>
                    <div>
                        <button type="button" className="add-button" onClick={() => completeSearch()}>Search</button>
                    </div>
                </div>
            </div>
            <EntryTable videos={Object.values(videos)}/>
        </div>
    )
}