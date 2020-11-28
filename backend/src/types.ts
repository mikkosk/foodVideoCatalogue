export interface User {
    id: string;
    name: string;
    hash: string;
    videos: Video['id'][]
}

export interface Video {
    id: string;
    url: string;
    clicks: number;
    favourites: number;
    ingredients: Ingredient['id'][];
    timeInMinutes: number;
    vegatarian: boolean;
    added: Datetime;
}

export interface Ingredient {
    id: string;
    name: string;
    pricePerServing: number;
    caloriesPerServing: number;
}

export interface Datetime {
    year: number;
    month: number;
    day: number;
    hours: number;
    minutes: number;
}