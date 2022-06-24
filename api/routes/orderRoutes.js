import {Router} from 'express';
import { orderController } from '../controllers/index.js';
import auth from '../middlewares/auth.js';

const router = Router();

router.post('/order', auth, orderController.createOrder);
router.get('/order/:id', orderController.getOrder);


export {router}