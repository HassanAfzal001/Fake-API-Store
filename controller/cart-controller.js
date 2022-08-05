const { default: axios } = require("axios");
const { validationResult } = require("express-validator");
const HttpError = require("../helpers/http-error");

const getAllCarts = (req, res, next) => {
  let customproduct = [];
  axios
    .get("https://fakestoreapi.com/carts")
    .then((response) => {
      //res.json({ Cart: response.data });

      for (let i = 0; i < response.data.length; i++) {
        //res.json({carts: response.data});
        for (let j = 0; j < response.data[i].products.length; j++) {
          id = response.data[i].products[j].productId;
          axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((result) => {
              data = {
                Product_name: result.data.title,
                Product_category: result.data.category,
                Product_quantity: response.data[i].products[j].quantity,
              };
              customproduct.push(data);
              console.log({ Products: customproduct });
              // if( j == response.data[i].products.length-1){
              //   res.json({cart: customproduct})
              // }
            })
            .catch((error) => {
              console.log({ error });
            });
        }
      }
    })
    .catch((error) => {
      console.log({ error });
    });
  res.json({ customproduct });
};

const getSingleProduct = (req, res, next) => {
  axios
    .get("https://fakestoreapi.com/products/categories")
    .then((response) => {
      res.json({ product: response.data });
    })
    .catch((error) => {
      console.log({ error });
    });
};

const getSingleCart = (req, res, next) => {
  axios
    .get("https://fakestoreapi.com/carts/")
    .then((response) => {
      res.json({ Cart: response.data });
    })
    .catch((error) => {
      console.log({ error });
    });
};

exports.getSingleProduct = getSingleProduct;
exports.getAllCarts = getAllCarts;
