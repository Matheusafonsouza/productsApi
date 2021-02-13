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

  public async execute({ size, amount, value }: ICreateSkuDTO): Promise<Sku> {
    const product = await this.skusRepository.create({
      size,
      amount,
      value,
    });

    return product;
  }
}

export default CreateSkuService;
