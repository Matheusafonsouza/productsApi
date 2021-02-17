import { inject, injectable } from 'tsyringe';
import Sku from '../infra/typeorm/entities/Sku';
import ISkuRepository from '../repositories/ISkusRepository';

@injectable()
class FindSkusService {
  constructor(
    @inject('SkusRepository')
    private skuRepository: ISkuRepository,
  ) {}

  public async execute(product_id: string): Promise<Sku[]> {
    const skus = await this.skuRepository.findAll(product_id);
    return skus;
  }
}

export default FindSkusService;
