import express from 'express';
import cors from 'cors';
import path from 'path';
import videoRouter from './routers/videoRouter'
import produceRouter from './routers/produceRouter'
import ingredientRouter from './routers/ingredientRouter'
import userRouter from './routers/userRouter'


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/videos', videoRouter);
app.use('/api/ingredient', ingredientRouter);
app.use('/api/produce', produceRouter);

export default app;