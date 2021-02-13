import { Router } from 'express';
import SkuController from '../controllers/SkusController';

const skuRouter = Router();

const skuController = new SkuController();

skuRouter.post('/', skuController.create);

export default skuRouter;
