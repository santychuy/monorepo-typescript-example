import express, { Application, json, urlencoded } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import IndexRoutes from './routes/index.routes';

const app: Application = express();

app.use(helmet());
app.use(cors({ credentials: true, origin: process.env.APP_URL }));
app.use(json());
app.use(urlencoded({ extended: false }));
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(IndexRoutes);

export default app;
