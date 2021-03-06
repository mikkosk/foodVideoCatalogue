"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var videoRouter_1 = __importDefault(require("./routers/videoRouter"));
var produceRouter_1 = __importDefault(require("./routers/produceRouter"));
var ingredientRouter_1 = __importDefault(require("./routers/ingredientRouter"));
var userRouter_1 = __importDefault(require("./routers/userRouter"));
var loginRouter_1 = __importDefault(require("./routers/loginRouter"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
console.log(path_1.default.join(__dirname, '../buildFrontend/build'));
app.use(express_1.default.static(path_1.default.join(__dirname, '../buildFrontend/build')));
app.use('/api/user', userRouter_1.default);
app.use('/api/videos', videoRouter_1.default);
app.use('/api/ingredients', ingredientRouter_1.default);
app.use('/api/produce', produceRouter_1.default);
app.use('/api/login', loginRouter_1.default);
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../buildFrontend/build/index.html'), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});
exports.default = app;
