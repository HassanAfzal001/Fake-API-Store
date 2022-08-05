const express = require('express');
const { check } = require('express-validator');

const cartController = require('../controller/cart-controller');
const router = express.Router();

router.get('/all-carts', cartController.getAllCarts);
router.get('/product', cartController.getSingleProduct);

module.exports = router;