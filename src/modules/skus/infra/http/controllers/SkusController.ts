import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSkuService from '../../../services/CreateSkuService';
import DeleteSkuService from '../../../services/DeleteSkuService';
import FindSkusService from '../../../services/FindSkusService';
import UpdateSkuService from '../../../services/UpdateSkuService';

export default class SkuController {
  async index(request: Request, response: Response): Promise<Response> {
    const { product_id } = request.params;

    const findSkus = container.resolve(FindSkusService);

    const skus = await findSkus.execute(product_id);

    return response.status(200).json(skus);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { size, amount, value, product_id } = request.body;

    const createSku = container.resolve(CreateSkuService);

    const sku = await createSku.execute({
      size,
      amount,
      value,
      product_id,
    });

    return response.status(200).json(sku);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { size, amount, value } = request.body;
    const { sku_id } = request.params;

    const updateSku = container.resolve(UpdateSkuService);

    const sku = await updateSku.execute({
      size,
      amount,
      value,
      sku_id,
    });

    return response.status(200).json(sku);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { sku_id } = request.params;

    const deleteSku = container.resolve(DeleteSkuService);

    await deleteSku.execute(sku_id);

    return response.status(200).json({ message: 'Sku successfully deleted!' });
  }
}
