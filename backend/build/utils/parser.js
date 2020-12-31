"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewProduce = void 0;
// CHECK FOR TYPES
var isString = function (text) {
    return typeof text === 'string' || text instanceof String;
};
var isNumber = function (number) {
    return typeof number === 'number' || number instanceof Number;
};
// PARSE GENERIC FIELDS
var parseGenericTextField = function (text, error) {
    if (!text || !isString(text)) {
        throw new Error('Missing or invalid ' + error);
    }
    return text;
};
var parseGenericNumberField = function (number, error) {
    if (!number || !isNumber(number)) {
        throw new Error('Missing or invalid ' + error);
    }
    return number;
};
// PARSE INTO TYPES
exports.toNewProduce = function (object) {
    var newProduce = {
        produceName: parseGenericTextField(object.produceName, "produce name"),
        pricePerGram: parseGenericNumberField(object.pricePerGram, "price"),
        caloriesPerGram: parseGenericNumberField(object.caloriesPerGram, "calories")
    };
    return newProduce;
};
