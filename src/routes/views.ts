import express from 'express';
const router = express.Router();
import path from 'path';

router.get('/', (req, res) => {
  res.sendFile(path.resolve('views', 'index.html'));
});

router.get('/users/:id', (req, res) => {
  res.sendFile(path.resolve('views', 'user.html'));
});

export default router;
