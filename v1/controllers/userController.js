const {
    createUserService,
    getAllUserService,
    getMyOrdersService,
    getMyProductsService,
    getMyBuyersService,
    getAllSellerService,
    getAllBuyerService,
    getVerifyUserService,
    getDeleteUserService
} = require("../services/userServices");

exports.createUser = async (req, res, next) => {
    try {
        const result = await createUserService(req.body);
        console.log(result, "result");
        res.status(200).json({
            status: "success",
            message: "Successfully created the User",
        });
    } catch (error) {
        console.log(error, "error");
        res.status(400).json({
            status: "fail",
            error: "couldn't create the User",
            message: error,
        });
    }
};

exports.getAllUsers = async (req, res, next) => {
    try {
        const categories = await getAllUserService();
        res.status(200).json({
            status: "success",
            data: categories,
            message: "Successfully created the brand",
        });
    } catch (error) {

        res.status(400).json({
            status: "fail",
            error: "couldn't get the categories",
            message: error.message
        });
    }
};

exports.getMyOrders = async (req, res, next) => {
    try {
        const categories = await getMyOrdersService(req.params.id);
        res.status(200).json({
            status: "success",
            data: categories,
            message: "Successfully created the brand",
        });
    } catch (error) {

        res.status(400).json({
            status: "fail",
            error: "couldn't get the categories",
            message: error.message
        });
    }
};

exports.getMyProducts = async (req, res, next) => {
    try {
        const categories = await getMyProductsService(req.params.id);
        res.status(200).json({
            status: "success",
            data: categories,
            message: "Successfully created the brand",
        });
    } catch (error) {

        res.status(400).json({
            status: "fail",
            error: "couldn't get the categories",
            message: error.message
        });
    }
};

exports.getMyBuyers = async (req, res, next) => {
    try {
        const categories = await getMyBuyersService(req.params.id);
        res.status(200).json({
            status: "success",
            data: categories,
            message: "Successfully created the brand",
        });
    } catch (error) {

        res.status(400).json({
            status: "fail",
            error: "couldn't get the categories",
            message: error.message
        });
    }
};

exports.getAllSeller = async (req, res, next) => {
    try {
        const categories = await getAllSellerService();
        res.status(200).json({
            status: "success",
            data: categories,
            message: "Successfully created the brand",
        });
    } catch (error) {

        res.status(400).json({
            status: "fail",
            error: "couldn't get the categories",
            message: error.message
        });
    }
};

exports.getAllBuyers = async (req, res, next) => {
    try {
        const categories = await getAllBuyerService();
        res.status(200).json({
            status: "success",
            data: categories,
            message: "Successfully created the brand",
        });
    } catch (error) {

        res.status(400).json({
            status: "fail",
            error: "couldn't get the categories",
            message: error.message
        });
    }
};

exports.getUserStatusUpdate = async (req, res, next) => {
    try {
        const categories = await getVerifyUserService(req.params.id);
        res.status(200).json({
            status: "success",
            data: categories,
            message: "Successfully created the brand",
        });
    } catch (error) {

        res.status(400).json({
            status: "fail",
            error: "couldn't get the categories",
            message: error.message
        });
    }
};

exports.getsDeleteUser = async (req, res, next) => {
    try {
        const categories = await getDeleteUserService(req.params.id);
        res.status(200).json({
            status: "success",
            data: categories,
            message: "Successfully created the brand",
        });
    } catch (error) {

        res.status(400).json({
            status: "fail",
            error: "couldn't get the categories",
            message: error.message
        });
    }
};
