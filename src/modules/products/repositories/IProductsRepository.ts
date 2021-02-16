import ICreateProductDTO from '../dtos/ICreateProductDTO';
import Product from '../infra/typeorm/entities/Product';

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findAll(): Promise<Product[]>;
  delete(product_id: string): Promise<void>;
  save(product: Product): Promise<Product>;
  findById(id: string): Promise<Product | undefined>;
}
