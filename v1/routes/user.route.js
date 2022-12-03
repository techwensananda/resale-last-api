const express = require('express')

const router = express.Router()
const userController = require("../controllers/userController");


router
    .route("/")
    .post(userController.createUser)
    .get(userController.getAllUsers);
    

router
    .route("/seller")
    .get(userController.getAllSeller);

router
    .route("/buyer")
    .get(userController.getAllBuyers);

router
    .route("/myorder/:id")
    .get(userController.getMyOrders)

router
    .route("/myproducts/:id")
    .get(userController.getMyProducts)

router
    .route("/deleteuser/:id")
    .delete(userController.getsDeleteUser)

router
    .route("/status/:id")
    .get(userController.getUserStatusUpdate)
//     .patch(storeController.updateStoreById);


module.exports = router;
