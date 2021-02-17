import { inject, injectable } from 'tsyringe';
import IUserRepository from '../repositories/IUserRepository';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';
import User from '../infra/typeorm/entities/User';

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute({
    password,
    email,
    user_id,
  }: IUpdateUserDTO): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error('Sku not found');
    }

    const updatedUser = await this.usersRepository.save({
      ...user,
      password,
      email,
    });

    return updatedUser;
  }
}

export default UpdateUserService;
