import { Router } from 'express';

import {
  showAllItems,
  createItem,
  showSingleItem,
  updateItem,
  deleteItem,
} from './items.handler';

export const router = Router({ mergeParams: true });

router.route('/').get(showAllItems).post(createItem);

router.route('/:itemId').get(showSingleItem).put(updateItem).delete(deleteItem);
