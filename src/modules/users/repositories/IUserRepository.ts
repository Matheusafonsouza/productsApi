import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  save(user: User): Promise<User>;
  delete(user_id: string): Promise<void>;
}
