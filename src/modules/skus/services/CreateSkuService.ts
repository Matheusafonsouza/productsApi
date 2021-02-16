import { inject, injectable } from 'tsyringe';
import ICreateSkuDTO from '../dtos/ICreateSkuDTO';
import Sku from '../infra/typeorm/entities/Sku';
import ISkuRepository from '../repositories/ISkusRepository';

@injectable()
class CreateSkuService {
  constructor(
    @inject('SkusRepository')
    private skusRepository: ISkuRepository,
  ) { }

  public async execute({
    size,
    amount,
    value,
    product_id,
  }: ICreateSkuDTO): Promise<Sku> {
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
