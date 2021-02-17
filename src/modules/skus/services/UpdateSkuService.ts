import { inject, injectable } from 'tsyringe';
import ISkuRepository from '../repositories/ISkusRepository';
import IUpdateSkuDTO from '../dtos/IUpdateSkuDTO';
import Sku from '../infra/typeorm/entities/Sku';
import AppError from '../../../shared/errors/AppError';

@injectable()
class UpdateSkuService {
  constructor(
    @inject('SkusRepository')
    private skusRepository: ISkuRepository,
  ) {}

  public async execute({
    amount,
    size,
    value,
    sku_id,
  }: IUpdateSkuDTO): Promise<Sku> {
    const sku = await this.skusRepository.findById(sku_id);

    if (!sku) {
      throw new AppError('Sku not found', 404);
    }

    const updatedSku = await this.skusRepository.save({
      ...sku,
      amount,
      size,
      value,
    });

    return updatedSku;
  }
}

export default UpdateSkuService;
