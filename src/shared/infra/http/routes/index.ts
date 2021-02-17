import { Router } from 'express';

import productRouter from '../../../../modules/products/infra/http/routes/products.routes';
import skuRouter from '../../../../modules/skus/infra/http/routes/skus.routes';
import sessionsRouter from '../../../../modules/users/infra/http/routes/sessions.routes';
import userRouter from '../../../../modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/product', productRouter);
routes.use('/user', userRouter);
routes.use('/sku', skuRouter);
routes.use('/session', sessionsRouter);

export default routes;
