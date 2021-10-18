import express from 'express'
import morgan from 'morgan';
import config from './config'
import cors from 'cors'

import productsRoutes from './routes/products.routes'
const app = express();

//settings
app.set('port', config.port);

//middlewares
const corsOptions = {};
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products',productsRoutes);


export default app;