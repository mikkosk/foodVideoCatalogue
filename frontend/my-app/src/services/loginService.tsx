import axios from 'axios'
import { LoggedInUser } from '../types'

const baseUrl = '/api/login'

const login = async (username: string, password: string): Promise<LoggedInUser> => {
    const res = await axios.post(baseUrl, {username, password})
    return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login
}