import express from "express";
import productsRoutes from "./routes/products.js";
import mongoose, { mongo } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/products", productsRoutes);

app.listen(port, host, () => console.log("Running on Port " + port));

app.get("/", (req, res) => res.send("Hi."));

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
