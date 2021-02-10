import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProductService from '../../../services/CreateProductService';

export default class ProductController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, description, company } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      description,
      company,
    });

    return response.status(200).json(product);
  }
}
