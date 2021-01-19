export interface User {
    id: number;
    username: string;
    hashcode: string;
    videos: Video[];
    favouriteVideos: Video[];
}

export type newUser = Omit<User, "id" | "videos" | "favouriteVideos" |"hashcode"> & {password: string}

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

export type NewVideoWithYTInfo = Omit<Video, "id" | "clicks" | "favourites" | "ingredients">

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

export interface DatabaseUser {
    userid: number,
    username: string,
    hashcode: string
}

export interface DatabaseIngredient {
    ingredientid: number,
    produceid: number,
    quantity: number,
    videoid: number
}

export interface DatabaseProduce {
    produceid: number,
    producename: string,
    price: number,
    calories: number
}

export interface DatabaseVideo {
    videoid: number,
    userid: number,
    username: string,
    videourl: string,
    favourites: number,
    clicks: number,
    timeinminutes: number,
    vegetarian: boolean,
    added: number,
    channelname: string,
    videoname: string
}

export interface UserWithVideos extends DatabaseUser {
    videos: VideoWithIngredients[],
    favourites: VideoWithIngredients[],
}

export interface VideoWithIngredients extends DatabaseVideo {
    ingredients: (DatabaseIngredient & DatabaseProduce)[]
}

export interface VideoQuery {
    ids?: Video['id'][];
    videos?: Video['videoName'][];
    users?: User['username'][];
    minClicks?: number;
    maxClicks?: number; 
    minFavourites?: number; 
    maxFavourites?: number;
    ingredients?: Produce['produceName'][];
}


export interface APIResult {
    kind: string;
    etag: string,
    items: [
        {
            kind: string,
            etag: string,
            id: string,
            snippet: {
                publishedAt: string,
                channelId: string,
                title: string,
                description: string,
                thumbnails: {
                    default: {
                        url: string,
                        width:  number,
                        height: number
                    },
                    medium: {
                        url: string,
                        width: number,
                        height: number
                    },
                    high: {
                        url: string,
                        width: number,
                        height: number
                    },
                    standard: {
                        url: string,
                        width: number,
                        height: number
                    },
                    maxres: {
                        url: string,
                        width: number,
                        height: number
                    }
                },
                channelTitle: string,
                tags: string[],
                categoryId: number,
                liveBroadcastContent: string,
                localized: {
                    title: string,
                    description: string
                }
            },
            contentDetails: {
                duration: string,
                dimension: string,
                definition: string,
                caption: string,
                licensedContent: string,
                contentRating: string,
                projection: string
            },
            statistics: {
                viewCount: number,
                likeCount: number,
                dislikeCount: number,
                favoriteCount: number,
                commentCount: number
            }
        }
    ],
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    }
}