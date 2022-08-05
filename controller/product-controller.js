const { validationResult } = require("express-validator");
const HttpError = require("../helpers/http-error");
const axios = require("axios");
const { getAllCarts } = require("./cart-controller");
var arr1 = [];
const getAllProducts = (req, res, next) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      res.json({ products: response.data });
    })
    .catch((error) => {
      console.log({ error });
    });
};

const getProductCategory = (req, res, next) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      res.json({ product: response.data });
    })
    .catch((error) => {
      console.log({ error });
    });
};

const getSingleProduct = (req, res, next) => {
  axios
    .get(`https://fakestoreapi.com/products/${req.params.id}`)
    .then((response) => {
      res.json({ resp: response.data });
    })
    .catch((error) => {
      console.log({ error });
    });
};

//Customize Query
const customProducts = (req, res, next) => {
  var arrData = [];
  var categories = [];
  var proPush = [];
  
  axios.get("https://fakestoreapi.com/products/categories").then((response) => {
    categories = response.data;
  
    axios.get("https://fakestoreapi.com/products").then((result) => {
      const prod = result.data;

      for (i in categories) {
        arrData.push(categories[i]);
        let category = categories[i];
        let pro = prod.filter((product) => {

          if (categories[i] == product.category) {
            proPush.push(product.title);
            return product.title;
          }

        });
        arrData.push({ products: proPush });
      }
      console.log("Look into Postman for results: -->");
      res.status(201).json(arrData);
    });
  });
};

exports.customProducts = customProducts;
exports.getSingleProduct = getSingleProduct;

exports.getAllProducts = getAllProducts;
exports.getProductCategory = getProductCategory;
