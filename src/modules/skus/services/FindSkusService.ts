import { inject, injectable } from 'tsyringe';
import Sku from '../infra/typeorm/entities/Sku';
import ISkuRepository from '../repositories/ISkusRepository';

@injectable()
class FindSkusService {
  constructor(
    @inject('SkusRepository')
    private skuRepository: ISkuRepository,
  ) { }

  public async execute(): Promise<Sku[]> {
    const skus = await this.skuRepository.findAll();
    return skus;
  }
}

export default FindSkusService;
