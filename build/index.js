"use strict";
// the commented out is just basic TypeScript
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();
// const app: express.Application = express();
// const port: number | string = 3001 || process.env.PORT;
// app.get('/', (req: express.Request, res: express.Response) => {
//   res.send('Wow, I just wrote so much code to accomplish just this.');
// })
// app.listen(port, ():void => {
//   console.log(`Sipping on the sweet port ${port} in the morning 😚`);
// })
// The below is written in JS and will be converted to TS
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dec_1 = require("./dec");
dotenv_1.default.config();
const app = express_1.default();
const port = 3001 || process.env.PORT;
app.get('/', (req, res) => {
    dec_1.someNum = 2;
    console.log(dec_1.someNum);
    res.send('Wow, I just wrote so much code to accomplish just this.');
});
app.listen(port, () => {
    console.log(`Sipping on the sweet port ${port} in the morning 😚`);
});
//# sourceMappingURL=index.js.map