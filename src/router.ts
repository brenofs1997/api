import path from 'node:path';
import { Router } from 'express';
import { createCategory } from './app/useCases/categorires/createCategory';
import { listCategories } from './app/useCases/categorires/listCategories';
import { listProducts } from './app/useCases/products/listProducts';
import multer from 'multer';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categorires/listProductsByCategories';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },

  }),
});

router.get('/categories', listCategories);
router.get('/products', listProducts);
router.get('/orders', listOrders);

router.post('/categories', createCategory);
router.post('/products', upload.single('image'), createProduct);

router.get('/categories/:categoryId/products', listProductsByCategory);

router.post('/orders', createOrder);

router.patch('/orders/:orderId', changeOrderStatus);

router.delete('/orders/:orderId', cancelOrder);
