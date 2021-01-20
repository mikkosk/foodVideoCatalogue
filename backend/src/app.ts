import express from 'express';
import cors from 'cors';
import path from 'path';
import videoRouter from './routers/videoRouter'
import produceRouter from './routers/produceRouter'
import ingredientRouter from './routers/ingredientRouter'
import userRouter from './routers/userRouter'
import loginRouter from './routers/loginRouter'


const app = express();
app.use(express.json());
app.use(cors());
console.log(path.join(__dirname, '../buildFrontend/build'))
app.use(express.static(path.join(__dirname, '../buildFrontend/build')));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../buildFrontend/build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });

app.use('/api/user', userRouter);
app.use('/api/videos', videoRouter);
app.use('/api/ingredients', ingredientRouter);
app.use('/api/produce', produceRouter);
app.use('/api/login', loginRouter);

export default app;