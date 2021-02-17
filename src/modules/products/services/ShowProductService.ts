import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
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
      throw new AppError('Product not found.', 404);
    }

    return product;
  }
}

export default ShowProductService;
