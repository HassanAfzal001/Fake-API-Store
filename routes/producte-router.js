const express = require("express");
const { check } = require("express-validator");

const productController = require("../controller/product-controller");

const router = express.Router();

router.get("/all-products", productController.getAllProducts);

router.get("/products/:id", productController.getSingleProduct);

router.get("/product-category", productController.getProductCategory);


router.get("/custom-products", productController.customProducts);

module.exports = router;
