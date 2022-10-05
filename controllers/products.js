import productSchema from "../models/product.js";

export const getProducts = (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

export const createProduct = (req, res) => {
  var product = new productSchema();
  product.name = req.body.name;
  product.price = req.body.price;
  product.description = req.body.description;
  product.category = req.body.category;
  product.image = req.file.filename;
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
