import { inject, injectable } from 'tsyringe';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
class FindProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsReposity: IProductsRepository,
  ) {}

  public async execute(user_id: string): Promise<Product[]> {
    const products = await this.productsReposity.findAll(user_id);

    return products;
  }
}

export default FindProductsService;
