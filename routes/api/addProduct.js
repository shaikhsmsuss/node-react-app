const express = require("express");

const router = express.Router();
const Products = require("../../models/Products");

router.get(
  "/product/:id",

  async (req, res) => {
    try {
      let data = await Products.findOne({ _id: req.params.id });
      if (data) {
        return res.json(data);
      } else {
        res.status(400).json({
          msg: "Product not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        msg: error,
      });
    }
  }
);

router.post("/addproduct", async (req, res) => {
  const { name, companyName, quantity, description, price } = req.body;

  try {
    const newProduct = new Products({
      name,
      companyName,
      quantity,
      description,
      price,
    });
    await newProduct.save();

    return res.json({ newProduct });
  } catch (error) {
    res.status(400).json({
      msg: error,
    });
  }
});

router.put("/updateproduct/:id", async (req, res) => {
  const { name, companyName, quantity, description, price } = req.body;

  let product = await Products.findOne({ _id: req.params.id });
  console.log(product);
  try {
    if (product) {
      const newProduct = {
        name,
        companyName,
        quantity,
        description,
        price,
      };

      let data = await Products.findByIdAndUpdate(
        req.params.id,
        { $set: newProduct },
        { new: true }
      );

      return res.json(data);
    } else {
      res.status(400).json({
        msg: "no found",
      });
    }
  } catch (error) {
    res.status(400).json({
      msg: error,
    });
  }
});

router.get(
  "/list",

  async (req, res) => {
    try {
      let data = await Products.find();
      res.json(data);
    } catch (error) {
      res.status(400).json({
        msg: error,
      });
    }
  }
);

router.delete(
  "/delete/:id",

  async (req, res) => {
    try {
      let data = await Products.findByIdAndDelete({ _id: req.params.id });
      console.log("data", data);

      if (!data) {
        res.status(400).json({ msg: "Product Not Found" });
      } else {
        res.json({
          msg: "Product Deleted Successfully",
        });
      }
    } catch (error) {
      console.log("error", error);

      res.status(400).json({
        msg: error,
      });
    }
  }
);

module.exports = router;
