import { DataSource } from "typeorm";
import dotevn from "dotenv";

dotevn.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  synchronize: true,
  logging: false,
});
