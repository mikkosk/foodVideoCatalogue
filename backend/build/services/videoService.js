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
var db_1 = __importDefault(require("../db"));
var addVideo = function (entry, user) { return __awaiter(void 0, void 0, void 0, function () {
    var videoUrl, timeInMinutes, vegetarian, added, videoName, channelName, newVideo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                videoUrl = entry.videoUrl, timeInMinutes = entry.timeInMinutes, vegetarian = entry.vegetarian, added = entry.added, videoName = entry.videoName, channelName = entry.channelName;
                return [4 /*yield*/, db_1.default.query("INSERT INTO videos (userId, videoUrl, timeInMinutes, vegetarian, added, videoname, channelname) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *", [user, videoUrl, timeInMinutes, vegetarian, added, videoName, channelName])];
            case 1:
                newVideo = _a.sent();
                return [2 /*return*/, newVideo.rows[0]];
        }
    });
}); };
var addClick = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedVideo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.default.query("UPDATE videos SET clicks = clicks + 1 WHERE videoid = $1 RETURNING *", [id])];
            case 1:
                updatedVideo = _a.sent();
                return [2 /*return*/, updatedVideo.rows[0]];
        }
    });
}); };
var addFavourite = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedVideo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.default.query("UPDATE videos SET favourites = favourites + 1 WHERE videoid = $1 RETURNING *", [id])];
            case 1:
                updatedVideo = _a.sent();
                return [2 /*return*/, updatedVideo.rows[0]];
        }
    });
}); };
var removeFavourite = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedVideo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.default.query("UPDATE videos SET favourites = favourites - 1 WHERE videoid = $1 RETURNING *", [id])];
            case 1:
                updatedVideo = _a.sent();
                return [2 /*return*/, updatedVideo.rows[0]];
        }
    });
}); };
var getVideo = function (videoId) { return __awaiter(void 0, void 0, void 0, function () {
    var video;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.default.query("SELECT videos.*, JSON_AGG(json_build_object(\n            'ingredientid', ingredients.ingredientid,\n            'produceid', produce.produceid,\n            'producename', produce.producename,\n            'price', produce.price,\n            'calories', produce.calories,\n            'quantity', ingredients.quantity\n            )) \n        FROM videos \n        LEFT JOIN ingredients on videos.videoid = ingredients.videoid \n        join produce on  ingredients.produceid = produce.produceid\n        WHERE videos.videoid = $1\n        GROUP BY videos.videoid", [videoId])];
            case 1:
                video = _a.sent();
                return [2 /*return*/, video.rows[0]];
        }
    });
}); };
var getVideos = function (parameters) { return __awaiter(void 0, void 0, void 0, function () {
    var i, previousRestriction, restrictions, ids, users, minClicks, maxClicks, minFavourites, maxFavourites, videos, ingredients, values, newRes, bool, bool, bool, bool, videosResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 1;
                previousRestriction = false;
                restrictions = '';
                ids = parameters.ids, users = parameters.users, minClicks = parameters.minClicks, maxClicks = parameters.maxClicks, minFavourites = parameters.minFavourites, maxFavourites = parameters.maxFavourites, videos = parameters.videos, ingredients = parameters.ingredients;
                values = new Array().concat((ingredients), ids, users, (minClicks ? (minClicks < 0 ? 0 : minClicks) : null), (maxClicks ? (maxClicks > 2147483647 ? 2147483647 : maxClicks) : null), (minFavourites ? (minFavourites < 0 ? 0 : minFavourites) : null), (maxFavourites ? (maxFavourites > 2147483647 ? 2147483647 : maxFavourites) : null), (videos)).filter(function (v) { return v != null; });
                newRes = function () {
                    if (previousRestriction) {
                        restrictions += "\nAND ";
                    }
                    else {
                        restrictions += "WHERE ";
                    }
                    previousRestriction = true;
                };
                if (ingredients && ingredients.length > 0) {
                    bool = false;
                    restrictions += "\n        JOIN (SELECT videos.videoid from videos\n\t\t\tJOIN ingredients on videos.videoid = ingredients.videoid \n            JOIN produce on ingredients.produceid = produce.produceid\n            WHERE ";
                    ingredients.forEach(function (ing) {
                        if (bool) {
                            restrictions += "\nOR ";
                        }
                        else {
                            bool = true;
                        }
                        restrictions += "LOWER ( produce.producename ) LIKE $" + i;
                        i++;
                    });
                    restrictions +=
                        " GROUP BY videos.videoid) AS vidpro ON vidpro.videoid = videos.videoid ";
                }
                if (ids && ids.length > 0) {
                    newRes();
                    bool = false;
                    ids.forEach(function (n) {
                        if (bool) {
                            restrictions += "\nOR ";
                        }
                        else {
                            bool = true;
                        }
                        restrictions += "videos.videoid = $" + i;
                        i++;
                    });
                }
                if (users && users.length > 0) {
                    newRes();
                    bool = false;
                    users.forEach(function (n) {
                        if (bool) {
                            restrictions += "\nOR ";
                        }
                        else {
                            bool = true;
                        }
                        restrictions += "LOWER ( users.username ) = $" + i;
                        i++;
                    });
                }
                if (minClicks) {
                    newRes();
                    restrictions += "videos.clicks >= $" + i;
                    i++;
                }
                if (maxClicks) {
                    newRes();
                    restrictions += "videos.clicks <= $" + i;
                    i++;
                }
                if (minFavourites) {
                    newRes();
                    restrictions += "videos.clicks >= $" + i;
                    i++;
                }
                if (maxFavourites) {
                    newRes();
                    restrictions += "videos.clicks <= $" + i;
                    i++;
                }
                if (videos && videos.length > 0) {
                    newRes();
                    bool = false;
                    videos.forEach(function (vid) {
                        if (bool) {
                            restrictions += "\nOR ";
                        }
                        else {
                            bool = true;
                        }
                        restrictions += "LOWER ( videos.videoname ) LIKE $" + i + " ";
                        i++;
                    });
                }
                return [4 /*yield*/, db_1.default.query("SELECT videos.*, users.username, JSON_AGG(json_build_object(\n            'ingredientid', ingredients.ingredientid,\n            'produceid', produce.produceid,\n            'producename', produce.producename,\n            'price', produce.price,\n            'calories', produce.calories,\n            'quantity', ingredients.quantity\n            )) AS ingredients\n        FROM videos \n        JOIN users on users.userid = videos.userid\n        LEFT JOIN ingredients on videos.videoid = ingredients.videoid \n        LEFT JOIN produce on  ingredients.produceid = produce.produceid\n        " + restrictions + "\n        GROUP BY videos.videoid, users.username\n        LIMIT 200\n        ", values)];
            case 1:
                videosResult = _a.sent();
                return [2 /*return*/, videosResult.rows];
        }
    });
}); };
var deleteVideo = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.default.query("DELETE FROM videos WHERE videoid = $1", [id])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.default = { addVideo: addVideo, getVideo: getVideo, getVideos: getVideos, deleteVideo: deleteVideo, addClick: addClick, addFavourite: addFavourite, removeFavourite: removeFavourite };
