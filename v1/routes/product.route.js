const express = require('express')

const router = express.Router()
const productController = require("../controllers/productController");


router
    .route("/")
    .post(productController.createProduct)
    .get(productController.getAllProducts);

router
    .route("/buy/:id")
    .post(productController.buyProduct)
// .patch(productController.updateStoreById);
router
    .route("/payment")
    .post(productController.paymentProduct)
router
    .route("/advertise")
    .post(productController.advertismentProduct)

module.exports = router;
