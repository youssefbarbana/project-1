const express = require("express");
const router = express.Router();
const Product = require("../module/Product");

//post
router.post("/", async (req, res) => {
  const newProduct = new Product({ ...req.body });
  try {
    const result = await newProduct.save();
    res.status(200).send({ response: result, msg: "new product added" });
  } catch (error) {
    res.status(500).send({ msg: "can not add new product" });
  }
});
//get
router.get("/", async (req, res) => {
  try {
    const result = await Product.find();
    res.status(200).send({ response: result, msg: "product" });
  } catch (error) {
    res.status(500).send({ msg: "can not find product" });
  }
});
//get by id
router.get("/:id", async (req, res) => {
  try {
    const result = await Product.findOne({ _id: req.params.id });
    res.status(200).send({ response: result });
  } catch (error) {
    res.status(200).send({ msg: "can not find that product" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const result = await Product.findByIdAndDelete({ _id: req.params.id });
    result.n
      ? res.send({ msg: "contact already deleted" })
      : res.send({ msg: "contact deleted" });
  } catch (error) {
    res.status(500).send({ msg: "can not delete this product" });
  }
});
//update
router.put("/:id", async (req, res) => {
  try {
    const result = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ message: "Product updated" });
  } catch (error) {
    res.status(400).send({ message: `can not update this Product` });
  }
});
module.exports = router;
