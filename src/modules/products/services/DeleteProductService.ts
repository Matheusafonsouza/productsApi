import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
class DeleteProductService {
  constructor(
    @inject('ProductsRepository')
    private productsReposity: IProductsRepository,
  ) {}

  public async execute(product_id: string): Promise<void> {
    const product = await this.productsReposity.findById(product_id);

    if (!product) {
      throw new AppError('Product not found', 404);
    }

    await this.productsReposity.delete(product_id);
  }
}

export default DeleteProductService;
