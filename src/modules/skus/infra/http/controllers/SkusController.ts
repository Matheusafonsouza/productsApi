import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSkuService from '../../../services/CreateSkuService';

export default class SkuController {
  async create(request: Request, response: Response): Promise<Response> {
    const { size, amount, value } = request.body;

    const createSku = container.resolve(CreateSkuService);

    const sku = await createSku.execute({
      size,
      amount,
      value,
    });

    return response.status(200).json(sku);
  }
}
