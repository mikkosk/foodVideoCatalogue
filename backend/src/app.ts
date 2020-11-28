import express from 'express';
import cors from 'cors';
import path from 'path';


const app = express();
app.use(express.json());
app.use(cors());

export default app;