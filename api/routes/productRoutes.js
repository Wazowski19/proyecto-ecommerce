import {Router} from 'express';
import { productController } from '../controllers/index.js';

const router = Router();

router.post('/product', productController.createProduct);

export {router}