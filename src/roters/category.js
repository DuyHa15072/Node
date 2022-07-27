import { Router } from "express";
import { create, listCate, read, removeCate, update} from "../controllers/category";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();

router.get('/categorys', listCate);
router.post('/categorys', create);
router.get('/categorys/:id', read );
router.put('/categorys/:id', update);
router.delete('/categorys/:id', removeCate);

export default router;