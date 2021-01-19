export interface User {
    id: number;
    username: string;
    hashcode: string;
    videos: Video[];
    favouriteVideos: Video[];
}

export type LoggedInUser = User & {token: String}
export type NewUser = Omit<User, "id" | "videos" | "favouriteVideos" |"hashcode"> & {password: string}

export interface Video {
    id: number;
    userId: number;
    username: string;
    videoUrl: string;
    clicks: number;
    favourites: number;
    ingredients: Ingredient[];
    timeInMinutes: number;
    vegetarian: boolean;
    added: number;
    videoName: string;
    channelName: string;
}

export type newVideo = Omit<Video, "id" | "clicks" | "favourites" | "ingredients" | "channelName" | "videoName">

export interface Ingredient {
    id: number;
    produce: Produce;
    quantity: number;
    videoId: Video['id']
}

export type newIngredient = Omit<Ingredient, "produce" | "id"> & {produceId: number}

export interface Produce {
    id: number;
    produceName: string;
    pricePerGram: number;
    caloriesPerGram: number;
}

export type newProduce = Omit<Produce, "id">

export interface Datetime {
    year: number;
    month: number;
    day: number;
    hours: number;
    minutes: number;
}

export interface VideoQuery {
    ids?: Video['id'][];
    videos?: Video['videoName'][]
    users?: User['username'][];
    minClicks?: number;
    maxClicks?: number; 
    minFavourites?: number; 
    maxFavourites?: number;
    ingredients?: Produce['produceName'][];
}
