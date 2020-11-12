import express, { Application}  from 'express';
import morgan from 'morgan'
import authRoutes from './routes/auth';
import cors from 'cors';

const app: Application = express();

// settings
app.set('port', process.env.PORT );

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

//routes
app.use('/api/auth',authRoutes)
app.use('/', async (req, res, next) => {
  res.status(200).json({message: 'Server is online and running'});
});


export default app;