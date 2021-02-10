import { Router } from 'express';
import ProductController from '../controllers/ProductsController';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/', productController.create);

export default productRouter;
