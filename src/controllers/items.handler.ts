import { GroceryList } from '../entities/GroceryList';
import { Item } from '../entities/Item';

export const showAllItems = async (req, res, next) => {
  try {
    const id = req.params.id;

    const list = await GroceryList.findOneOrFail(id, { relations: ['items'] });
    res.status(200).json(list.items);
  } catch (error) {
    next(error);
  }
};

export const showSingleItem = async (req, res, next) => {
  try {
    const id = req.params.itemId;

    const item = await Item.findOneOrFail(id);
    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

export const createItem = async (req, res, next) => {
  try {
    const item: any = await Item.create(req.body);
    await item.save();

    const list = await GroceryList.findOneOrFail(req.params.id, {
      relations: ['items'],
    });
    list.items.push(item);

    await list.save();

    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

export const deleteItem = async (req, res, next) => {
  try {
    const id = req.params.itemId;

    const item = await Item.delete(id);

    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};

export const updateItem = async (req, res, next) => {
  try {
    const id = req.params.itemId;

    const item = await Item.findOneOrFail(id);
    item.name = req.body.name;

    await item.save();

    res.status(200).json(item);
  } catch (error) {
    next(error);
  }
};
