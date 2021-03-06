import {Router} from 'express';
import { userController } from '../controllers/index.js';

const router = Router();

router.post('/user', userController.createUser);
router.post('/login', userController.login);

export {router}