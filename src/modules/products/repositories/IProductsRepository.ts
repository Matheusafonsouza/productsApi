import ICreateProductDTO from '../dtos/ICreateProductDTO';
import Product from '../infra/typeorm/entities/Product';

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findAll(): Promise<Product[]>;
  save(product: Product): Promise<Product>;
  findById(id: string): Promise<Product | undefined>;
}
