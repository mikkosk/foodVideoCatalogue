import axios from 'axios'
import { NewUser, User } from "../types"
import authenticationHelper from '../utils/authenticationHelper'

const baseUrl = '/api/user'

const addUser = async (newUser: NewUser): Promise<User> => {
    const res = await axios.post(baseUrl, newUser)
    return res.data
}

const getUser = async (id: User['id']): Promise<User> => {
    const res = await axios.get(`${baseUrl}/${id}`)
    return res.data;
}

const addFavourite = async (userid: User['id'], videoid: User['id']) => {
    await axios.post(`${baseUrl}/${userid}/favourite/${videoid}`,null, {headers: {Authorization: authenticationHelper.getAuthenticationHeaders().headers.Authorization}})
}

const removeFavourite = async (userid: User['id'], videoid: User['id']) => {
    await axios.delete(`${baseUrl}/${userid}/favourite/${videoid}`, {headers: {Authorization: authenticationHelper.getAuthenticationHeaders().headers.Authorization}})
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { addUser, getUser, addFavourite, removeFavourite }