import { Router } from 'express';
import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';
import SkuController from '../controllers/SkusController';

const skuRouter = Router();

const skuController = new SkuController();

skuRouter.use(ensureAuthenticated);

skuRouter.get('/', skuController.index);
skuRouter.post('/', skuController.create);
skuRouter.put('/:sku_id', skuController.update);
skuRouter.delete('/:sku_id', skuController.delete);

export default skuRouter;
