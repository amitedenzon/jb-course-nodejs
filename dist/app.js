"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routers/users"));
const PORT = 8080;
const server = (0, express_1.default)();
server.use(`/users`, users_1.default);
server.listen(PORT, () => {
    console.log(`started listening on port ${PORT}...`);
});
