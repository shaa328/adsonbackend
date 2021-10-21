const express = require("express");
const checkAuth = require("../middlewares/check-auth");
const router = express.Router();
const productController = require('../controllers/product');
const imgUpload = require('../middlewares/productimg');

const Product = require('../models/products');



router.get("/", productController.get_all);

router.post("/", checkAuth, imgUpload, productController.post);

router.get("/:productId", checkAuth, productController.get_by_id);

router.patch("/:productId", checkAuth, productController.update );

router.delete("/:productId", checkAuth, productController.delete);

module.exports = router;