import { config } from 'dotenv';
import path from 'path';
import express from 'express';
import { sessionRouter } from './routes'

const app = express();
app.use('/', express.static(path.resolve(__dirname, './public')));
app.use('/', sessionRouter);
app.use(express.json());

app.listen(
    process.env.PORT || 4000,
    () => console.log('SERVER HAS BEEN STARTED'));
