import { Router } from 'express';
import UserController from '../controllers/UsersController';

const userRouter = Router();

const userController = new UserController();

userRouter.get('/', userController.index);
userRouter.post('/', userController.create);
userRouter.put('/:user_id', userController.update);
userRouter.delete('/:user_id', userController.delete);

export default userRouter;
