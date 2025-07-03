import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./dataSource";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 2000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => console.error("Error connecting to the database", error));

app.listen(PORT, () => {
  console.log(`service is running on ${PORT}`);
});
