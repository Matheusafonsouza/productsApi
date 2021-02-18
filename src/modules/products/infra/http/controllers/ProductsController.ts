import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProductService from '../../../services/CreateProductService';
import FindProductsService from '../../../services/FindProductsService';
import UpdateProductService from '../../../services/UpdateProductService';
import DeleteProductService from '../../../services/DeleteProductService';
import ShowProductService from '../../../services/ShowProductService';

export default class ProductController {
  async index(request: Request, response: Response): Promise<Response> {
    const findProducts = container.resolve(FindProductsService);
    const { id } = request.user;

    const products = await findProducts.execute(id);

    return response.status(200).json(products);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;

    const findProducts = container.resolve(ShowProductService);

    const products = await findProducts.execute(product_id);

    return response.status(200).json(products);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, description, company } = request.body;
    const { id } = request.user;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      description,
      company,
      user_id: id,
    });

    return response.status(200).json(product);
  }

  async update(request: Request, response: Response): Promise<Response> {
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
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;

    const deleteProduct = container.resolve(DeleteProductService);

    await deleteProduct.execute(product_id);

    return response
      .status(200)
      .json({ message: 'Product successfully deleted!' });
  }
}
