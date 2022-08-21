import express from 'express';
import UsersController from '../controllers/users';
const router = express.Router();

router.get('/', async (req, res) => {
  const users = await UsersController.getAllUsers();
  res.json({
    users,
  });
});

router.get('/:userId', async (req, res) => {
  const extendedUser = await UsersController.getSingleUser(req.params.userId);
  res.json(extendedUser);
});

export default router;
