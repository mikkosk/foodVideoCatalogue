import { DatabaseIngredient, DatabaseProduce, DatabaseUser, DatabaseVideo, Ingredient, Produce, User, UserWithVideos, Video, VideoWithIngredients } from "../types";

export const produceObject = (database: DatabaseProduce): Produce => {
    try {
    const produce = {
        id: database.produceid,
        produceName: database.producename,
        pricePerGram: database.price,
        caloriesPerGram: database.calories
    }

    return produce
    } catch {
        throw new Error('Missing or broken produce')
    }
}

export const ingredientObject = (database: DatabaseIngredient): Ingredient => {
    try {
        const ingredient: Ingredient = {
            id: database.ingredientid,
            produce: {
                id: database.produceid,
                produceName: '',
                caloriesPerGram: 0,
                pricePerGram: 0
            },
            quantity: database.quantity,
            videoId: database.videoid
        }
    
        return ingredient
    } catch {
        throw new Error('Missing or broken ingredient')
    }
    
}

export const videoObject = (database: VideoWithIngredients | DatabaseVideo): Video => {
    try {
        var ingredients: Ingredient[] = []

        if (database && 'ingredients' in database && database.ingredients) database.ingredients.forEach((ingredient: (DatabaseProduce & DatabaseIngredient)) => {
            if (ingredient.ingredientid) {
                const produce: Produce = {
                    id: ingredient.produceid,
                    produceName: ingredient.producename,
                    pricePerGram: ingredient.price,
                    caloriesPerGram: ingredient.calories
                }

                const finalIngredient: Ingredient = {
                    id: ingredient.ingredientid,
                    produce: produce,
                    quantity: ingredient.quantity,
                    videoId: database.videoid
                }
                
                ingredients = ingredients.concat(finalIngredient)
            }
        })

        const video: Video = {
            id: database.videoid,
            userId: database.userid,
            username: database.username,
            videoUrl: database.videourl,
            clicks: database.clicks,
            favourites: database.favourites,
            ingredients: ingredients,
            timeInMinutes: database.timeinminutes,
            vegetarian: database.vegetarian,
            added: database.added,
            channelName: database.channelname,
            videoName: database.videoname,

        }
        return video;

    } catch {
        throw new Error('Missing or broken video')
    }


}

export const userObject = (database: UserWithVideos | DatabaseUser): User => {

    try {
        var videos: Video[] = []
        var favourites: Video[] = []

        if (database && 'videos' in database && database.videos) database.videos.forEach((video: VideoWithIngredients) => {
            if (video.videoid) {
                videos = videos.concat(videoObject(video))
            }
        })

        if (database && 'favourites' in database && database.favourites) database.favourites.forEach((video: VideoWithIngredients) => {
            if (video.videoid) {
                favourites = favourites.concat(videoObject(video))
            }
        })

        const user: User = {
            id: database.userid,
            username: database.username,
            hashcode: database.hashcode,
            videos: videos,
            favouriteVideos: favourites
        }

        return user;

    } catch {
        throw new Error('Missing or broken user')
    }
    
}