"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var videoRouter_1 = __importDefault(require("./routers/videoRouter"));
var produceRouter_1 = __importDefault(require("./routers/produceRouter"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.use('/api/videos', videoRouter_1.default);
app.use('/api/produce', produceRouter_1.default);
exports.default = app;
