import { inject, injectable } from 'tsyringe';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
class FindProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsReposity: IProductsRepository,
  ) {}

  public async execute(): Promise<Product[]> {
    const product = await this.productsReposity.findAll();

    return product;
  }
}

export default FindProductsService;
