import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Mealkit {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("text", { array: true })
  ingredients!: string;

  @Column("text")
  instructions!: string;

  @Column("float")
  price!: number;
}
