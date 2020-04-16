import { Router } from 'express';
import {
  showAllGroceries,
  createNewGrocery,
  showSingleGrocery,
  updateGrocery,
  deleteGrocery,
} from './groceries.handler';
import { router as itemsRoute } from './items.routes';

export const router: Router = Router();

router.route('/').get(showAllGroceries).post(createNewGrocery);

router
  .route('/:id')
  .get(showSingleGrocery)
  .put(updateGrocery)
  .delete(deleteGrocery);

router.use('/:id/items', itemsRoute);
