import { inject, injectable } from 'tsyringe';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';
import IUpdateProductDTO from '../dtos/IUpdateProductDTO';

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
      throw new Error('Product not found');
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
