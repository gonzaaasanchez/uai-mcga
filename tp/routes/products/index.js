import { Router } from 'express';
import productsController from '../../controllers/products';

const productsRouter = Router();

productsRouter, get('/', productsController.getAll);
