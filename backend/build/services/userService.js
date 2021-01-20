"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var db_1 = __importDefault(require("../db"));
var addUser = function (entry) { return __awaiter(void 0, void 0, void 0, function () {
    var username, password, saltRounds, passwordHash, newUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                username = entry.username, password = entry.password;
                saltRounds = 10;
                return [4 /*yield*/, bcrypt_1.default.hash(password, saltRounds)];
            case 1:
                passwordHash = _a.sent();
                return [4 /*yield*/, db_1.default.query("INSERT INTO users (username, hashcode) VALUES($1, $2) RETURNING *", [username, passwordHash])];
            case 2:
                newUser = _a.sent();
                return [2 /*return*/, newUser.rows[0]];
        }
    });
}); };
var getUser = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.default.query("SELECT users.*, videos.videos, favourites.favourites\n        FROM users\n        LEFT JOIN (SELECT users.*, JSON_AGG(json_build_object(\n                'videoid', videos.videoid,\n                'videourl', videos.videourl,\n                'favourites', videos.favourites,\n                'clicks', videos.clicks,\n                'timeinminutes', videos.timeinminutes,\n                'vegetarian', videos.vegetarian,\n                'added', videos.added,\n                'videoname', videos.videoname,\n                'channelname', videos.channelname,\n                'ingredients', ingredientsVid.json_agg\n                )) as videos\n    \n            FROM users \n            JOIN videos on videos.userid = users.userid \n            LEFT JOIN (SELECT videosArray.videoid, videosArray.json_agg\n                    from (SELECT videos.*, users.username, JSON_AGG(json_build_object(\n                                'ingredientid', ingredients.ingredientid,\n                                'produceid', produce.produceid,\n                                'producename', produce.producename,\n                                'price', produce.price,\n                                'calories', produce.calories,\n                                'quantity', ingredients.quantity\n                                )) \n                            FROM videos \n                            JOIN users on users.userid = videos.userid\n                            JOIN ingredients on videos.videoid = ingredients.videoid \n                            JOIN produce on  ingredients.produceid = produce.produceid\n                            GROUP BY videos.videoid, users.username) as videosArray\n                    ) AS ingredientsVid\n                ON ingredientsVid.videoid = videos.videoid\n    \n            WHERE users.userid = $1\n            GROUP BY users.userid) as videos\n            on users.userid = videos.userid\n            \n        LEFT JOIN (SELECT users.userid, \n                JSON_AGG(json_build_object(\n                'videoid', favourites.videoid,\n                'videourl', favourites.videourl,\n                'favourites', favourites.favourites,\n                'clicks', favourites.clicks,\n                'timeinminutes', favourites.timeinminutes,\n                'vegetarian', favourites.vegetarian,\n                'added', favourites.added,\n                'videoname', favourites.videoname,\n                'channelname', favourites.channelname,\n                'ingredients', ingredientsFav.json_agg\n                )) as favourites\n            FROM users \n            JOIN userfavouritevideo on userfavouritevideo.userid = users.userid\n            JOIN videos AS favourites ON favourites.videoid = userfavouritevideo.videoid\n            \n            LEFT JOIN (SELECT favouritesArray.videoid, favouritesArray.json_agg\n                    from (SELECT videos.*, users.username, JSON_AGG(json_build_object(\n                                'ingredientid', ingredients.ingredientid,\n                                'produceid', produce.produceid,\n                                'producename', produce.producename,\n                                'price', produce.price,\n                                'calories', produce.calories,\n                                'quantity', ingredients.quantity\n                                )) \n                            FROM videos \n                            JOIN users on users.userid = videos.userid\n                            JOIN ingredients on videos.videoid = ingredients.videoid \n                            JOIN produce on  ingredients.produceid = produce.produceid\n                            GROUP BY videos.videoid, users.username) as favouritesArray\n                    ) AS ingredientsFav\n                ON ingredientsFav.videoid = favourites.videoid\n            WHERE users.userid = $1\n            GROUP BY users.userid) as favourites\n            ON users.userid = favourites.userid\n        WHERE users.userid = $1\n    ", [userId])];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user.rows[0]];
        }
    });
}); };
var getLoginUser = function (username) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.default.query("SELECT users.*, videos.videos, favourites.favourites\n        FROM users\n        LEFT JOIN (SELECT users.*, JSON_AGG(json_build_object(\n                'videoid', videos.videoid,\n                'videourl', videos.videourl,\n                'favourites', videos.favourites,\n                'clicks', videos.clicks,\n                'timeinminutes', videos.timeinminutes,\n                'vegetarian', videos.vegetarian,\n                'added', videos.added,\n                'videoname', videos.videoname,\n                'channelname', videos.channelname,\n                'ingredients', ingredientsVid.json_agg\n                )) as videos\n    \n            FROM users \n            JOIN videos on videos.userid = users.userid \n            LEFT JOIN (SELECT videosArray.videoid, videosArray.json_agg\n                    from (SELECT videos.*, users.username, JSON_AGG(json_build_object(\n                                'ingredientid', ingredients.ingredientid,\n                                'produceid', produce.produceid,\n                                'producename', produce.producename,\n                                'price', produce.price,\n                                'calories', produce.calories,\n                                'quantity', ingredients.quantity\n                                )) \n                            FROM videos \n                            JOIN users on users.userid = videos.userid\n                            JOIN ingredients on videos.videoid = ingredients.videoid \n                            JOIN produce on  ingredients.produceid = produce.produceid\n                            GROUP BY videos.videoid, users.username) as videosArray\n                    ) AS ingredientsVid\n                ON ingredientsVid.videoid = videos.videoid\n    \n            WHERE users.username = $1\n            GROUP BY users.userid) as videos\n            on users.userid = videos.userid\n            \n        LEFT JOIN (SELECT users.userid, \n                JSON_AGG(json_build_object(\n                'videoid', favourites.videoid,\n                'videourl', favourites.videourl,\n                'favourites', favourites.favourites,\n                'clicks', favourites.clicks,\n                'timeinminutes', favourites.timeinminutes,\n                'vegetarian', favourites.vegetarian,\n                'added', favourites.added,\n                'videoname', favourites.videoname,\n                'channelname', favourites.channelname,\n                'ingredients', ingredientsFav.json_agg\n                )) as favourites\n            FROM users \n            JOIN userfavouritevideo on userfavouritevideo.userid = users.userid\n            JOIN videos AS favourites ON favourites.videoid = userfavouritevideo.videoid\n            \n            LEFT JOIN (SELECT favouritesArray.videoid, favouritesArray.json_agg\n                    from (SELECT videos.*, users.username, JSON_AGG(json_build_object(\n                                'ingredientid', ingredients.ingredientid,\n                                'produceid', produce.produceid,\n                                'producename', produce.producename,\n                                'price', produce.price,\n                                'calories', produce.calories,\n                                'quantity', ingredients.quantity\n                                )) \n                            FROM videos \n                            JOIN users on users.userid = videos.userid\n                            JOIN ingredients on videos.videoid = ingredients.videoid \n                            JOIN produce on  ingredients.produceid = produce.produceid\n                            GROUP BY videos.videoid, users.username) as favouritesArray\n                    ) AS ingredientsFav\n                ON ingredientsFav.videoid = favourites.videoid\n            WHERE users.username = $1\n            GROUP BY users.userid) as favourites\n            ON users.userid = favourites.userid\n        WHERE users.username = $1\n    ", [username])];
            case 1:
                user = _a.sent();
                return [2 /*return*/, user.rows[0]];
        }
    });
}); };
var deleteUser = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.default.query("DELETE FROM users WHERE userid = $1", [id])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var addFavouriteVideo = function (userId, videoId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.default.query("INSERT INTO userfavouritevideo (userid, videoid) VALUES($1, $2)", [userId, videoId])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var removeFavouriteVideo = function (userId, videoId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.default.query("DELETE FROM userfavouritevideo WHERE userid = $1 AND videoid = $2", [userId, videoId])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.default = { addUser: addUser, getUser: getUser, deleteUser: deleteUser, addFavouriteVideo: addFavouriteVideo, removeFavouriteVideo: removeFavouriteVideo, getLoginUser: getLoginUser };
