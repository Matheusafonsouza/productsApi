import ICreateSkuDTO from '../dtos/ICreateSkuDTO';
import Sku from '../infra/typeorm/entities/Sku';

export default interface ISkuRepository {
  create(data: ICreateSkuDTO): Promise<Sku>;
}
