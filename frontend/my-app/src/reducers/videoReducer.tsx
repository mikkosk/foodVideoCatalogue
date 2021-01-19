
import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Video} from '../types'

const initialState: VideoState = {videos: {}}

const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        setVideos(state, action: PayloadAction<Video[]>) {
            const videos: Video[] = action.payload
            return {...state, videos: {...videos.reduce((memo, video: Video) => ({...memo, [video.id]: video}), {})}}
            }
    }
})

export const {setVideos} = videosSlice.actions

export interface VideoState {
    videos: { [id: number]: Video },
}

export default videosSlice.reducer