import axios from "axios";
import { Ingredient, newIngredient, newVideo, Video, VideoQuery } from "../types";
import authenticationHelper from "../utils/authenticationHelper";

const baseUrl = 'http://localhost:3001/api/videos'

const addVideo = async (newVideo: newVideo): Promise<Video> => {
    const res = await axios.post(baseUrl, newVideo, {headers: {Authorization: authenticationHelper.getAuthenticationHeaders().headers.Authorization}})
    return res.data
}

const addClick = async (id: Video['id']) => {
    await axios.put(`${baseUrl}/${id}/click`)
}

const addFavourite = async (id: Video['id']) => {
    await axios.put(`${baseUrl}/${id}/favourite/add`)
}

const removeFavourite = async (id: Video['id']) => {
    await axios.put(`${baseUrl}/${id}/favourite/remove`)
}

const addIngredient = async(newIngredients: newIngredient[]): Promise<Ingredient> => {
    const res = await axios.post('http://localhost:3001/api/ingredients', newIngredients, {headers: {Authorization: authenticationHelper.getAuthenticationHeaders().headers.Authorization}})
    return res.data
}

const getVideos = async (parameters: VideoQuery): Promise<Video[]> => {
    const {ids, users, minClicks, maxClicks, minFavourites, maxFavourites, ingredients, videos} = parameters
    const res = await axios.post(`${baseUrl}/get`, {ids, users, minClicks, maxClicks, minFavourites, maxFavourites, ingredients, videos})
    return res.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getVideos, addVideo, addIngredient, addClick, addFavourite, removeFavourite}