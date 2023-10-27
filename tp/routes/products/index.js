import express from 'express';
import productsController from '../../controllers/products/index.js';

const productsRouter = express.Router();

//GET - http://localhost/products
productsRouter.get('/', productsController.getAll);

//POST - http://localhost/products
productsRouter.post('/', productsController.create);

//GET - http://localhost/products/:id
productsRouter.get('/:id', productsController.getById);

//DELETE - http://localhost/products/:id
// productsRouter.delete('/:id', productsController.delete);

//PUT - http://localhost/products/:id
// productsRouter.put('/:id', productsController.update);

export default productsRouter;
