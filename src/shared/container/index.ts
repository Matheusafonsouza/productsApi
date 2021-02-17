import { container } from 'tsyringe';

import '../../modules/users/providers';

import ProductsRepository from '../../modules/products/infra/typeorm/repositories/ProductsRepository';
import IProductsRepository from '../../modules/products/repositories/IProductsRepository';
import SkusRepository from '../../modules/skus/infra/typeorm/repositories/SkusRepository';
import ISkuRepository from '../../modules/skus/repositories/ISkusRepository';
import UserRepository from '../../modules/users/infra/typeorm/repositories/UserRepository';
import IUserRepository from '../../modules/users/repositories/IUserRepository';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<ISkuRepository>('SkusRepository', SkusRepository);

container.registerSingleton<IUserRepository>('UsersRepository', UserRepository);
