import Product from '../../products/infra/typeorm/entities/Product';

export default interface IUpdateSkuDTO {
  size: string;
  amount: number;
  sku_id: string;
  value: number;
}
