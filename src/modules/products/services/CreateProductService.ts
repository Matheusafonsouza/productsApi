import { inject, injectable } from 'tsyringe';
import ICreateProductDTO from '../dtos/ICreateProductDTO';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsReposity: IProductsRepository,
  ) { }

  public async execute({
    name,
    description,
    company,
  }: ICreateProductDTO): Promise<Product> {
    const product = await this.productsReposity.create({
      company,
      description,
      name,
    });

    return product;
  }
}

export default CreateProductService;
