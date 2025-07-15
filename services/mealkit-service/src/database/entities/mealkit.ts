import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Mealkit {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column("text", { array: true })
  ingredients!: string;

  @Column("text")
  instructions!: string;

  @Column("float")
  price!: number;
}
