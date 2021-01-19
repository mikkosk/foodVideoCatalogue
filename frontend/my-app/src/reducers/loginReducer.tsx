import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoggedInUser, NewUser } from "../types"
import loginService from '../services/loginService';

const initialState: LoginState = {user: null}

export const login = createAsyncThunk(
    'login/login',
    async(credentials: NewUser, thunkAPI) => {
        const {username, password} = credentials
        const response = await loginService.login(username, password);
        return response
    }
)

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout(state) {
            return initialState
        },
        loadUser(state, action: PayloadAction<LoggedInUser>) {
            const user = action.payload
            return {...state, user}
        }
    }
})

export const { logout, loadUser } = loginSlice.actions

export interface LoginState {
    user: LoggedInUser | null
}

export default loginSlice.reducer