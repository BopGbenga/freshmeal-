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
  CustomerId!: number;

  @Column()
  address!: string;

  @Column()
  quantity!: number;

  @Column()
  totalprice!: number;

  @Column("uuid", { array: true })
  mealkitIds!: string[];

  @Column({ default: "pending" })
  status!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
