import { Ingredient, Produce, User, Video } from "../types";

// CHECK FOR TYPES
const isString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isNumber = (number: any): number is number => {
    return typeof number === 'number' || number instanceof Number;
};

// PARSE GENERIC FIELDS

const parseGenericTextField = (text: any, error: string): string => {
    if(!text || !isString(text)) {
        throw new Error('Missing or invalid ' + error);
    }
    return text;
};

const parseGenericNumberField = (number: any, error: string): number => {
    if((!number && number !== 0) || !isNumber(number)) {
        throw new Error('Missing or invalid ' + error);
    }
    return number;
};

const parseGenericBooleanField = (boolean: any, error: string): boolean => {
    if(typeof boolean === 'boolean') {
        return boolean;
    }
    throw new Error('Missing or invalid ' + error)
}

// PARSE INTO TYPES
export const toNewProduce = (object: any): Omit<Produce, "id"> => {
    const newProduce: Omit<Produce, "id"> = {
        produceName: parseGenericTextField(object.produceName, "produce name"),
        pricePerGram: parseGenericNumberField(object.pricePerGram, "price"),
        caloriesPerGram: parseGenericNumberField(object.caloriesPerGram, "calories")
    }
    return newProduce;
}

export const toNewIngredient = (object: any): Omit<Ingredient, "produce" | "id"> & {produceId: number} => {
    const newIngredient: Omit<Ingredient, "produce" | "id"> & {produceId: number} = {
        produceId: parseGenericNumberField(object.produceId, "produce id"),
        quantity: parseGenericNumberField(object.quantity, "quantity"),
        videoId: parseGenericNumberField(object.videoId, "video id")
    }
    return newIngredient;
}

export const toNewUser = (object: any): Omit<User, "id" | "videos" | "favouriteVideos" | "hash"> & {password: string} => {
    const newUser: Omit<User, "id" | "videos" | "favouriteVideos" | "hash"> & {password: string} = {
        username: parseGenericTextField(object.username, "username"),
        password: parseGenericTextField(object.password, "password")
    }
    return newUser
}

export const toNewVideo = (object: any): Omit<Video, "id" | "clicks" | "favourites" | "ingredients"> => {
    const newVideo: Omit<Video, "id" | "clicks" | "favourites" | "ingredients"> = {
        //Urlille oma parseri kun api lisätään
        videoUrl: parseGenericTextField(object.videoUrl, "url"),
        timeInMinutes: parseGenericNumberField(object.timeInMinutes, "time"),
        vegetarian: parseGenericBooleanField(object.vegetarian, "vegetarian "),
        added: Date.now()
    }
    return newVideo;
}