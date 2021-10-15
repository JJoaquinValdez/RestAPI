import {Router} from 'express'
import { createNewProduct, 
    getProducts,
    getProductbyId, 
    DeleteProductbyId,
    getTotalProducts } from '../controllers/products.controller';
const router = Router();


router.get('/products', getProducts);
router.post('/products', createNewProduct);
router.get('/products/:id', getProductbyId);
router.get('/products//count', getTotalProducts);
router.delete('/products/:id', DeleteProductbyId);



export default router