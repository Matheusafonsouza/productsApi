import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
class DeleteUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute(user_id: string): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    await this.usersRepository.delete(user_id);
  }
}

export default DeleteUserService;
