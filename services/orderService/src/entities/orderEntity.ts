import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  CustomerName!: string;

  @Column()
  customerPhone!: number;

  @Column()
  address!: number;

  @Column()
  quantity!: number;

  @Column()
  totalprice!: number;

  @Column()
  mealkitId!: number;

  @Column()
  mealKitName!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
