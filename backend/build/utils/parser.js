"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewVideo = exports.toNewUser = exports.toNewIngredient = exports.toNewProduce = void 0;
var isString = function (text) {
    return typeof text === 'string' || text instanceof String;
};
var isNumber = function (number) {
    return typeof number === 'number' || number instanceof Number;
};
var parseGenericTextField = function (text, error) {
    if (!text || !isString(text)) {
        throw new Error('Missing or invalid ' + error);
    }
    return text;
};
var parseGenericNumberField = function (number, error) {
    if ((!number && number !== 0) || !isNumber(number)) {
        throw new Error('Missing or invalid ' + error);
    }
    return number;
};
var parseGenericBooleanField = function (boolean, error) {
    if (typeof boolean === 'boolean') {
        return boolean;
    }
    throw new Error('Missing or invalid ' + error);
};
exports.toNewProduce = function (object) {
    var newProduce = {
        produceName: parseGenericTextField(object.produceName, "produce name"),
        pricePerGram: parseGenericNumberField(object.pricePerGram, "price"),
        caloriesPerGram: parseGenericNumberField(object.caloriesPerGram, "calories")
    };
    return newProduce;
};
exports.toNewIngredient = function (object) {
    var newIngredient = {
        produceId: parseGenericNumberField(object.produceId, "produce id"),
        quantity: parseGenericNumberField(object.quantity, "quantity"),
        videoId: parseGenericNumberField(object.videoId, "video id")
    };
    return newIngredient;
};
exports.toNewUser = function (object) {
    var newUser = {
        username: parseGenericTextField(object.username, "username"),
        password: parseGenericTextField(object.password, "password")
    };
    return newUser;
};
exports.toNewVideo = function (object) {
    var newVideo = {
        userId: parseGenericNumberField(object.userId, "user"),
        videoUrl: parseGenericTextField(object.videoUrl, "url"),
        username: parseGenericTextField(object.username, "username"),
        timeInMinutes: parseGenericNumberField(object.timeInMinutes, "time"),
        vegetarian: parseGenericBooleanField(object.vegetarian, "vegetarian "),
        added: Date.now()
    };
    return newVideo;
};
