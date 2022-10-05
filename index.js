import express from "express";
import productsRoutes from "./routes/products.js";
import mongoose, { mongo } from "mongoose";
import * as dotenv from "dotenv";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import path from "path";

dotenv.config();

const app = express();
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-commerce Products API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://boiling-island-39133.herokuapp.com",
      },
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: [`${path.join(path.dirname("index.js"), "./routes/*.js")}`],
};

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/products", productsRoutes);
app.use("/api", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

app.listen(port, host, () => console.log("Running on Port " + port));

app.get("/", (req, res) => res.send("Hi."));

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
