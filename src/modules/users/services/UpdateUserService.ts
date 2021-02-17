import { inject, injectable } from 'tsyringe';
import IUserRepository from '../repositories/IUserRepository';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import AppError from '../../../shared/errors/AppError';

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    password,
    email,
    user_id,
  }: IUpdateUserDTO): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    if (email) {
      const userWithUpdatedEmail = await this.usersRepository.findByEmail(
        email,
      );

      if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user_id) {
        throw new AppError('Email already used.', 401);
      }

      user.email = email;
    }

    if (password) {
      user.password = await this.hashProvider.generateHash(password);
    }

    const updatedUser = await this.usersRepository.save(user);

    return updatedUser;
  }
}

export default UpdateUserService;
