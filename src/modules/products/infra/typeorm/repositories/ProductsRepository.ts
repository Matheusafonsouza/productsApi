import { getRepository, Repository } from 'typeorm';
import ICreateProductDTO from '../../../dtos/ICreateProductDTO';
import IFindProductDTO from '../../../dtos/IFindProductDTO';
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
    user_id,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      name,
      description,
      company,
      user_id,
    });

    await this.ormRepository.save(product);

    return product;
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id, {
      relations: ['skus'],
    });
    return product;
  }

  public async findProduct({
    name,
    user_id,
  }: IFindProductDTO): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: { name, user_id },
    });
    return product;
  }

  public async findAll(user_id: string): Promise<Product[]> {
    const products = await this.ormRepository.find({ where: { user_id } });
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
