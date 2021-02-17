import { inject, injectable } from 'tsyringe';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';
import IUpdateProductDTO from '../dtos/IUpdateProductDTO';
import AppError from '../../../shared/errors/AppError';

@injectable()
class UpdateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsReposity: IProductsRepository,
  ) {}

  public async execute({
    company,
    name,
    description,
    product_id,
  }: IUpdateProductDTO): Promise<Product> {
    const product = await this.productsReposity.findById(product_id);

    if (!product) {
      throw new AppError('Product not found', 404);
    }

    const updatedProduct = await this.productsReposity.save({
      ...product,
      company,
      name,
      description,
    });

    return updatedProduct;
  }
}

export default UpdateProductService;
