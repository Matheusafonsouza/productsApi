import { inject, injectable } from 'tsyringe';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
class ShowProductService {
  constructor(
    @inject('ProductsRepository')
    private productsReposity: IProductsRepository,
  ) {}

  public async execute(product_id: string): Promise<Product> {
    const product = await this.productsReposity.findById(product_id);

    if (!product) {
      throw new Error('Product not found.');
    }

    return product;
  }
}

export default ShowProductService;
