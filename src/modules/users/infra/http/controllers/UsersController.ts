import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../../../services/CreateUserService';
import DeleteUserService from '../../../services/DeleteUserService';
import FindUsersService from '../../../services/FindUsersService';
import UpdateUserService from '../../../services/UpdateUserService';

export default class UserController {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const findUsers = container.resolve(FindUsersService);

      const users = await findUsers.execute();

      return response.status(200).json(users);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { password, email } = request.body;

      const createUser = container.resolve(CreateUserService);

      const user = await createUser.execute({
        password,
        email,
      });

      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { password, email } = request.body;
      const { user_id } = request.params;

      const updateUser = container.resolve(UpdateUserService);

      const user = await updateUser.execute({
        password,
        email,
        user_id,
      });

      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request.params;

      const deleteUser = container.resolve(DeleteUserService);

      await deleteUser.execute(user_id);

      return response
        .status(200)
        .json({ message: 'User successfully deleted!' });
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}
