import { getRepository, Repository } from 'typeorm';
import ICreateProductDTO from '../../../dtos/ICreateProductDTO';
import Product from '../entities/Product';

class ProductsRepository {
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
}

export default ProductsRepository;