"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.decodedToken = function (token) {
    var secret = process.env.SECRET;
    if (!secret || !token || token.substr(0, 7) !== 'bearer ') {
        throw new Error("False credentials");
    }
    var decodedToken = jsonwebtoken_1.default.verify(token.substr(7), secret);
    return decodedToken;
};
