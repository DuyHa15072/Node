import { Router } from "express";
import {listOrder,creatOrder,removeOrder,updateOrder} from '../controllers/order'

const router = Router();

router.get('/orders',);
router.post('/orders', creatOrder);
router.delete('/orders/:id', removeOrder);

export default router;