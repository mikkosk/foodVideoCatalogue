import express from 'express';
import cors from 'cors';
import path from 'path';
import videoRouter from './routers/videoRouter'


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/videos', videoRouter);

export default app;