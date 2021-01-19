import {combineReducers} from 'redux'
import userReducer from './reducers/userReducer'
import loginReducer from './reducers/loginReducer'
import videoReducer from './reducers/videoReducer'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import produceReducer from './reducers/produceReducer'
import notificationReducer from './reducers/notificationReducer'

export const rootReducer = combineReducers({
    users: userReducer,
    login: loginReducer,
    videos: videoReducer,
    produce: produceReducer,
    notifications: notificationReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store

export type RootState = ReturnType<typeof rootReducer>


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()