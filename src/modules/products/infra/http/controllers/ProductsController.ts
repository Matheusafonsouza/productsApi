import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProductService from '../../../services/CreateProductService';
import FindProductsService from '../../../services/FindProductsService';
import UpdateProductService from '../../../services/UpdateProductService';

export default class ProductController {
  async index(request: Request, response: Response): Promise<Response> {
    const findProducts = container.resolve(FindProductsService);

    const products = await findProducts.execute();

    return response.status(200).json(products);
  }

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

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description, company } = request.body;
      const { product_id } = request.params;

      const updateProduct = container.resolve(UpdateProductService);

      const product = await updateProduct.execute({
        name,
        description,
        company,
        product_id,
      });

      return response.status(200).json(product);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}
