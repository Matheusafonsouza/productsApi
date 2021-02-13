import { Router } from 'express';
import ProductController from '../controllers/ProductsController';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', productController.create);
productRouter.get('/', productController.index);
productRouter.put('/:product_id', productController.update);

export default productRouter;
