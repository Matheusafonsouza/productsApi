import { Router } from 'express';
import UserController from '../controllers/UsersController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', userController.create);

userRouter.use(ensureAuthenticated);

userRouter.get('/', userController.index);
userRouter.put('/:user_id', userController.update);
userRouter.delete('/:user_id', userController.delete);

export default userRouter;
