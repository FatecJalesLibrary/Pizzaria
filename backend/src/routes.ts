import { Router} from  "express";
import multer from 'multer';

import uploadConfig from './config/multer';//configuração do multer.ts

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import {CreateProductController} from './controllers/product/CreateProductController';
import {ListByCategoryController} from './controllers/product/ListByCategoryController';
import{CreateOrderController} from './controllers/order/CreateOrderController';

import {AddItemController} from './controllers/order/AddItemController'

import {RemoveOrderController} from './controllers/order/RemoveOrderController';

const router = Router(); //crio uma instância do elemento Router

const upload = multer(uploadConfig.upload("./tmp"));//definição da pasta de upload


//-----ROTAS PARA USER-----//
router.post('/user', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/userinfo', isAuthenticated, new DetailUserController().handle);

//-----ROTAS PARA CATEGORY -----/
router.post('/category', isAuthenticated, new CreateCategoryController().handle);

router.get('/listcategory', isAuthenticated, new ListCategoryController().handle);

//-----ROTAS PARA PRODUCT-----//
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle );

//------ROTAS PARA ORDER -----//
router.post('/order', isAuthenticated, new CreateOrderController().handle );

router.delete('/deleteorder', isAuthenticated, new RemoveOrderController().handle);

router.post('/order/add', isAuthenticated, new AddItemController().handle);



//exportação do objeto router para acesso de outros arquivos
export {router}; 