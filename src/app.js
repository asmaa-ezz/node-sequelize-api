import express, { json } from 'express';
import morgan from 'morgan';

// Imprting router
import projectsRouter from './routes/projects';
import tasksRouter from './routes/tasks';


const app = express();


// middlewares
app.use(morgan('dev'));
app.use(json());

// router
app.use('/api/projects', projectsRouter);
app.use('/api/tasks', tasksRouter);

export default app;