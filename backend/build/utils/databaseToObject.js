"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userObject = exports.videoObject = exports.ingredientObject = exports.produceObject = void 0;
exports.produceObject = function (database) {
    try {
        var produce = {
            id: database.produceid,
            produceName: database.producename,
            pricePerGram: database.price,
            caloriesPerGram: database.calories
        };
        return produce;
    }
    catch (_a) {
        throw new Error('Missing or broken produce');
    }
};
exports.ingredientObject = function (database) {
    try {
        var ingredient = {
            id: database.ingredientid,
            produce: {
                id: database.produceid,
                produceName: '',
                caloriesPerGram: 0,
                pricePerGram: 0
            },
            quantity: database.quantity,
            videoId: database.videoid
        };
        return ingredient;
    }
    catch (_a) {
        throw new Error('Missing or broken ingredient');
    }
};
exports.videoObject = function (database) {
    try {
        var ingredients = [];
        if (database && 'ingredients' in database && database.ingredients)
            database.ingredients.forEach(function (ingredient) {
                if (ingredient.ingredientid) {
                    var produce = {
                        id: ingredient.produceid,
                        produceName: ingredient.producename,
                        pricePerGram: ingredient.price,
                        caloriesPerGram: ingredient.price
                    };
                    var finalIngredient = {
                        id: ingredient.ingredientid,
                        produce: produce,
                        quantity: ingredient.quantity,
                        videoId: database.videoid
                    };
                    ingredients = ingredients.concat(finalIngredient);
                }
            });
        var video = {
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
        };
        return video;
    }
    catch (_a) {
        throw new Error('Missing or broken video');
    }
};
exports.userObject = function (database) {
    try {
        var videos = [];
        var favourites = [];
        if (database && 'videos' in database && database.videos)
            database.videos.forEach(function (video) {
                if (video.videoid) {
                    videos = videos.concat(exports.videoObject(video));
                }
            });
        if (database && 'favourites' in database && database.favourites)
            database.favourites.forEach(function (video) {
                if (video.videoid) {
                    favourites = favourites.concat(exports.videoObject(video));
                }
            });
        var user = {
            id: database.userid,
            username: database.username,
            hashcode: database.hashcode,
            videos: videos,
            favouriteVideos: favourites
        };
        return user;
    }
    catch (_a) {
        throw new Error('Missing or broken user');
    }
};
