import { GroceryList } from './../entities/GroceryList';

export const showAllGroceries = async (req, res, next) => {
  try {
    const groceries: GroceryList[] = await GroceryList.find({
      relations: ['items'],
    });

    res.status(200).json(groceries);
  } catch (error) {
    next(error);
  }
};

export const showSingleGrocery = async (req, res, next) => {
  try {
    const id = req.params.id;
    const grocery: GroceryList = await GroceryList.findOneOrFail(id, {
      relations: ['items'],
    });

    res.status(200).json(grocery);
  } catch (error) {
    next(error);
  }
};

export const createNewGrocery = async (req, res, next) => {
  try {
    const grocery: any = await GroceryList.create(req.body);
    await grocery.save();

    res.status(201).json(grocery);
  } catch (error) {
    next(error);
  }
};

export const updateGrocery = async (req, res, next) => {
  try {
    const id = req.body.id;
    const grocery = await GroceryList.findOneOrFail(id);

    grocery.name = req.body.name;

    await grocery.save();

    res.status(200).json(grocery);
  } catch (error) {
    next(error);
  }
};

export const deleteGrocery = async (req, res, next) => {
  try {
    const id = req.params.id;
    const grocery = await GroceryList.delete(id);

    res.status(200).json(grocery);
  } catch (error) {
    next(error);
  }
};
