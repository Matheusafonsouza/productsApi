import { Router } from 'express';
import ProductController from '../controllers/ProductsController';

const productRouter = Router();

const productController = new ProductController();

productRouter.get('/', productController.index);

export default productRouter;
