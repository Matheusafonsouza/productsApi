import { Router } from 'express';

import productRouter from '../../../../modules/products/infra/http/routes/products.routes';
import skuRouter from '../../../../modules/skus/infra/http/routes/skus.routes';

const routes = Router();

routes.use('/product', productRouter);
routes.use('/sku', skuRouter);

export default routes;
