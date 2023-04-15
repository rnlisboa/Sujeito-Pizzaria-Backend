import {Router} from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { isAuthenticated } from './Middlewares/isAuthenticated';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';


import uploadConfig from "./config/multer"
import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// ### USUARIOS ###

// cadastro de usuarios, chama o controller de CreateUserController() que se conecta ao BD atravez de CreateUserService()
router.post('/users', new CreateUserController().handle)

// loga, chama o controller de AuthUserController() que se conecta ao BD atravez de AuthUserService()
router.post('/session', new AuthUserController().handle)

// checa se o usario enviou o token atravez da requisição, recupera o id do usuario atravez do token
router.get('/me', isAuthenticated, new DetailUserController().handle)


// ### CATEGORIAS ###

// cadastro de usuarios, chama o controller de CreateCategoryController() que se conecta ao BD atravez de CreateCategoryService()
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)

// ### PRODUTOS ###

router.post('/product', isAuthenticated, upload.single('file') ,new CreateProductController().handle)

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

// ### PEDIDOS ###

// CRIA PEDIDO
router.post('/order', isAuthenticated, new CreateOrderController().handle)
// APAGA PEDIDO
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
// ADICIONA ITEM AO PEDIDO
router.post('/order/add', isAuthenticated, new AddItemController().handle)
// DELETA ITEM DO PEDIDO
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
// ENVIA PEDIDO
router.patch('/order/send', isAuthenticated, new SendOrderController().handle)

router.get('/orders', isAuthenticated, new ListOrderController().handle)

router.get('/order/detail', isAuthenticated, new DetailOrderController().handler)

router.patch('/order/finish', isAuthenticated, new FinishOrderController().handle)
export { router };
