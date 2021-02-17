import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import ICreateSkuDTO from '../dtos/ICreateSkuDTO';
import Sku from '../infra/typeorm/entities/Sku';
import ISkuRepository from '../repositories/ISkusRepository';

@injectable()
class CreateSkuService {
  constructor(
    @inject('SkusRepository')
    private skusRepository: ISkuRepository,
  ) {}

  public async execute({
    size,
    amount,
    value,
    product_id,
  }: ICreateSkuDTO): Promise<Sku> {
    const findSkuBySize = await this.skusRepository.findBySize(size);

    if (findSkuBySize) {
      throw new AppError('Sku already exists.');
    }

    const sku = await this.skusRepository.create({
      size,
      amount,
      value,
      product_id,
    });

    return sku;
  }
}

export default CreateSkuService;
