const express = require('express')

const router = express.Router()
const categoryController = require("../controllers/categoryController");


router
    .route("/")
    .post(categoryController.createCategory)
    .get(categoryController.getAllCategories);

router
    .route("/:id")
    .get(categoryController.getProductsCategorie)
    .delete(categoryController.getDeleteCategorie)
// .patch(categoryController.updateStoreById);


module.exports = router;
