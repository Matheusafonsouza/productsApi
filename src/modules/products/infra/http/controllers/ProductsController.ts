import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProductService from '../../../services/CreateProductService';
import FindProductsService from '../../../services/FindProductsService';
import UpdateProductService from '../../../services/UpdateProductService';
import DeleteProductService from '../../../services/DeleteProductService';
import ShowProductService from '../../../services/ShowProductService';

export default class ProductController {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const findProducts = container.resolve(FindProductsService);

      const products = await findProducts.execute();

      return response.status(200).json(products);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    try {
      const { product_id } = request.params;

      const findProducts = container.resolve(ShowProductService);

      const products = await findProducts.execute(product_id);

      return response.status(200).json(products);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description, company } = request.body;

      const createProduct = container.resolve(CreateProductService);

      const product = await createProduct.execute({
        name,
        description,
        company,
      });

      return response.status(200).json(product);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
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

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { product_id } = request.params;

      const deleteProduct = container.resolve(DeleteProductService);

      await deleteProduct.execute(product_id);

      return response
        .status(200)
        .json({ message: 'Product successfully deleted!' });
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}
