import { container } from 'tsyringe';
import ProductsRepository from '../../modules/products/infra/typeorm/repositories/ProductsRepository';
import IProductsRepository from '../../modules/products/repositories/IProductsRepository';
import SkusRepository from '../../modules/skus/infra/typeorm/repositories/SkusRepository';
import ISkuRepository from '../../modules/skus/repositories/ISkusRepository';

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<ISkuRepository>('SkusRepository', SkusRepository);
