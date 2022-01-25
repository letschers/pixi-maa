"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
var PORT = 3000;
app.use('/src', express_1.default.static('src'));
app.use('/build', express_1.default.static('build'));
app.use('/Assets', express_1.default.static('Assets'));
app.get('/', function (request, response) {
    response.sendFile(path_1.default.join(__dirname, '/index.html'));
});
app.listen(PORT, function () {
    console.log("[server]: Server is running at https://localhost:".concat(PORT));
});
