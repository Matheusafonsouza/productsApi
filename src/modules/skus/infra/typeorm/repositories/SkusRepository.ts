import { getRepository, Repository } from 'typeorm';
import ICreateSkuDTO from '../../../dtos/ICreateSkuDTO';
import ISkusRepository from '../../../repositories/ISkusRepository';
import Sku from '../entities/Sku';

class SkusRepository implements ISkusRepository {
  private ormRepository: Repository<Sku>;

  constructor() {
    this.ormRepository = getRepository(Sku);
  }

  public async create({
    size,
    amount,
    value,
    product_id,
  }: ICreateSkuDTO): Promise<Sku> {
    const sku = this.ormRepository.create({
      size,
      amount,
      value,
      product_id,
    });

    await this.ormRepository.save(sku);

    return sku;
  }

  public async findById(id: string): Promise<Sku | undefined> {
    const sku = await this.ormRepository.findOne(id);
    return sku;
  }

  public async findAll(): Promise<Sku[]> {
    const skus = await this.ormRepository.find();
    return skus;
  }

  public async save(sku: Sku): Promise<Sku> {
    const updatedSku = await this.ormRepository.save(sku);
    return updatedSku;
  }

  public async delete(sku_id: string): Promise<void> {
    await this.ormRepository.delete(sku_id);
  }
}

export default SkusRepository;
