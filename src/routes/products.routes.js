import {Router} from 'express'
import { createNewProduct, 
    getProducts,
    getProductbyId, 
    DeleteProductbyId,
    getTotalProducts,
    updateProductbyId} from '../controllers/products.controller';
const router = Router();


router.get('/', getProducts);
router.post('/', createNewProduct);
router.get('/count', getTotalProducts);
router.get('/:id', getProductbyId);
router.delete('/:id', DeleteProductbyId);
router.put('/:id', updateProductbyId);



export default router;