import {Router} from 'express';
import { orderController } from '../controllers/index.js';

const router = Router();

router.post('/order', orderController.createOrder);
router.get('/order/:id', orderController.getOrder);


export {router}