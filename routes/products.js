import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  getProductsByCategory,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.get("/:id", getProductById);

router.delete("/:id", deleteProduct);

router.patch("/:id", updateProduct);

router.get("/category/:category", getProductsByCategory);

export default router;
