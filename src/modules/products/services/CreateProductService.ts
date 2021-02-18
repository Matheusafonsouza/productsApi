import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import ICreateProductDTO from '../dtos/ICreateProductDTO';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsReposity: IProductsRepository,
  ) {}

  public async execute({
    name,
    description,
    company,
    user_id,
  }: ICreateProductDTO): Promise<Product> {
    const findProductByName = await this.productsReposity.findProduct({
      name,
      user_id,
    });

    if (findProductByName) {
      throw new AppError('Product already exists.');
    }

    const product = await this.productsReposity.create({
      company,
      description,
      name,
      user_id,
    });

    return product;
  }
}

export default CreateProductService;
