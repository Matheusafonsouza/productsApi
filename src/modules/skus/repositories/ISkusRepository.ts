import ICreateSkuDTO from '../dtos/ICreateSkuDTO';
import Sku from '../infra/typeorm/entities/Sku';

export default interface ISkuRepository {
  create(data: ICreateSkuDTO): Promise<Sku>;
  findById(id: string): Promise<Sku | undefined>;
  findBySize(size: string): Promise<Sku | undefined>;
  findAll(product_id: string): Promise<Sku[]>;
  save(product: Sku): Promise<Sku>;
  delete(sku_id: string): Promise<void>;
}
