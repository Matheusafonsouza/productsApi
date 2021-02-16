import { Router } from 'express';
import ProductController from '../controllers/ProductsController';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', productController.create);
productRouter.get('/', productController.index);
productRouter.put('/:product_id', productController.update);
productRouter.get('/:product_id', productController.show);
productRouter.delete('/:product_id', productController.delete);

export default productRouter;
