import productSchema from "../models/product.js";

export const getProducts = (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

export const createProduct = (req, res) => {
  const product = productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

export const getProductById = (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;

  productSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  productSchema
    .updateOne({ _id: id }, { $set: updates })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

export const getProductsByCategory = (req, res) => {
  const { category } = req.params;
  productSchema
    .find({ category: category })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
