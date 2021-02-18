import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IFindProductDTO from '../dtos/IFindProductDTO';
import Product from '../infra/typeorm/entities/Product';

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findAll(user_id: string): Promise<Product[]>;
  delete(product_id: string): Promise<void>;
  save(product: Product): Promise<Product>;
  findById(id: string): Promise<Product | undefined>;
  findProduct(data: IFindProductDTO): Promise<Product | undefined>;
}
