import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/base.entity';

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  price: number;

  @Column()
  productImg: string;
}
