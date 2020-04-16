import { GroceryList } from './GroceryList';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { type } from 'os';

@Entity('items')
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    unique: true,
  })
  name: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created: string;

  @ManyToOne((type) => GroceryList, (groceryList) => groceryList.items, {
    onDelete: 'CASCADE',
  })
  grocery_list: GroceryList;
}
