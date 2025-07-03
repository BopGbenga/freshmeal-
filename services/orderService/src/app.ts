import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const Port = process.env.PORT || 2100;

app.listen(Port, () => {
  console.log(`server is running on ${Port}`);
});
