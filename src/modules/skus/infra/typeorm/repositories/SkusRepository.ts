import { getRepository, Repository } from 'typeorm';
import ICreateSku from '../../../dtos/ICreateSkuDTO';
import ISkusRepository from '../../../repositories/ISkusRepository';
import Sku from '../entities/Sku';

class SkusRepository implements ISkusRepository {
  private ormRepository: Repository<Sku>;

  constructor() {
    this.ormRepository = getRepository(Sku);
  }

  public async create({ size, amount, value }: ICreateSku): Promise<Sku> {
    const sku = this.ormRepository.create({
      size,
      amount,
      value,
    });

    await this.ormRepository.save(sku);

    return sku;
  }
}

export default SkusRepository;
