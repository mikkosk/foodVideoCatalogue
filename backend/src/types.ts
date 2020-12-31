export interface User {
    id: number;
    username: string;
    hash: string;
    videos: Video['id'][];
    favouriteVideos: Video['id'][];
}

export type newUser = Omit<User, "id" | "videos" | "favouriteVideos" |"hash"> & {password: string}

export interface Video {
    id: number;
    videoUrl: string;
    clicks: number;
    favourites: number;
    ingredients: Ingredient['id'][];
    timeInMinutes: number;
    vegetarian: boolean;
    added: number;
}

export type newVideo = Omit<Video, "id" | "clicks" | "favourites" | "ingredients">

export interface Ingredient {
    id: number;
    produce: Produce;
    quantity: number;
    videoId: Video['id']
}

export type newIngredient = Omit<Ingredient, "produce"|"id"> & {produceId: number}

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