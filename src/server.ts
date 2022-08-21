import express from 'express';
const app = express();

import userRouter from './routes/user';
import viewsRouter from './routes/views';

app.use(express.json());

app.use('/', viewsRouter);
app.use('/api/users', userRouter);

app.listen(3000, () => console.log('Server started'));
