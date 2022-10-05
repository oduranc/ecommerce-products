import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  getProductsByCategory,
} from "../controllers/products.js";
import { upload } from "../controllers/images.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: Product name
 *        image:
 *          type: string
 *          description: Image Name (Can be uploaded to server with Product POST Request and with a Form.)
 *        price:
 *          type: number
 *          description: Product price
 *        description:
 *          type: string
 *          description: Product description
 *        category:
 *          type: string
 *          description: String Product category
 *      required:
 *        - name
 *        - image
 *        - price
 *        - description
 *        - category
 *      example:
 *        name: Nintendo Switch
 *        image: ...
 *        price: 290
 *        description: Nintendo Videogames console 2020 version
 *        category: Videogames
 */

/**
 * @swagger
 * /products:
 *  get:
 *    summary: Return all products
 *    tags: [Product]
 *    responses:
 *      200:
 *        description: All products
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Product'
 */
router.get("/", getProducts);

/**
 * @swagger
 * /products:
 *  post:
 *    summary: Create a new product (Needs to be used with form)
 *    tags: [Product]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: New product created
 */
router.post("/", upload.single("image"), createProduct);

/**
 * @swagger
 * /products/{id}:
 *  get:
 *    summary: Return one product by id
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product id
 *    responses:
 *      200:
 *        description: One product
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: Product not found
 */
router.get("/:id", getProductById);

/**
 * @swagger
 * /products/{id}:
 *  delete:
 *    summary: Delete one product by id
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product id
 *    responses:
 *      200:
 *        description: Product deleted
 *      404:
 *        description: Product not found
 */
router.delete("/:id", deleteProduct);

/**
 * @swagger
 * /products/{id}:
 *  patch:
 *    summary: Update one product by id
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: Product updated
 *      404:
 *        description: Product not found
 */
router.patch("/:id", updateProduct);

/**
 * @swagger
 * /products/category/{category}:
 *  get:
 *    summary: Return list of products by category
 *    tags: [Product]
 *    parameters:
 *      - in: path
 *        name: category
 *        schema:
 *          type: string
 *        required: true
 *        description: The product category
 *    responses:
 *      200:
 *        description: List of products
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Product'
 */
router.get("/category/:category", getProductsByCategory);

export default router;
