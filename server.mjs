import express from 'express';
import cors from "cors";
import Enqueue from "express-enqueue";
import compression from "compression";
import corsOptions from './config/cors/index.mjs';
import shouldCompress from './config/compression/index.mjs';

const app = express();
app.use(await express.json());
app.use(await compression({ filter: shouldCompress }));
app.use(await cors({ credentials: true }));

const queue = new Enqueue({
    concurrentWorkers: 4,
    maxSize: 200,
    timeout: 30000
});

app.use(queue.getMiddleware());

app.use(express.static('frontend'))

app.use(queue.getErrorMiddleware())

export default app
