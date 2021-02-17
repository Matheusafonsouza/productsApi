import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import ISkuRepository from '../repositories/ISkusRepository';

@injectable()
class DeleteSkuService {
  constructor(
    @inject('SkusRepository')
    private skusRepository: ISkuRepository,
  ) {}

  public async execute(sku_id: string): Promise<void> {
    const sku = await this.skusRepository.findById(sku_id);

    if (!sku) {
      throw new AppError('Sku not found', 404);
    }

    await this.skusRepository.delete(sku_id);
  }
}

export default DeleteSkuService;
