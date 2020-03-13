// the commented out is just basic TypeScript

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

import express from 'express';
import dotenv from 'dotenv';
import { someNum } from './dec';

dotenv.config();

const app = express();
const port: number | string = 3001 || process.env.PORT;

app.get('/', (req, res) => {
  someNum = 2;
  console.log(someNum);
  res.send('Wow, I just wrote so much code to accomplish just this.');
})

app.listen(port, () => {
  console.log(`Sipping on the sweet port ${port} in the morning 😚`);
})