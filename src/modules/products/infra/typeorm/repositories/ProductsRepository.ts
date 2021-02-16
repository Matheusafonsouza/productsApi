import { getRepository, Repository } from 'typeorm';
import ICreateProductDTO from '../../../dtos/ICreateProductDTO';
import IProductsRepository from '../../../repositories/IProductsRepository';
import Product from '../entities/Product';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create({
    company,
    description,
    name,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      name,
      description,
      company,
    });

    await this.ormRepository.save(product);

    return product;
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id);
    return product;
  }

  public async findAll(): Promise<Product[]> {
    const products = await this.ormRepository.find();
    return products;
  }

  public async save(product: Product): Promise<Product> {
    const updatedProduct = await this.ormRepository.save(product);
    return updatedProduct;
  }

  public async delete(product_id: string): Promise<void> {
    await this.ormRepository.delete(product_id);
  }
}

export default ProductsRepository;
