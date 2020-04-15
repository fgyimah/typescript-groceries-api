import { Item } from './Item';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { type } from 'os';

@Entity('groceries')
export class GroceryList extends BaseEntity {
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

  @ManyToOne((type) => Item, { cascade: true })
  @JoinColumn()
  item: Item[];
}
