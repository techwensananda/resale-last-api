const {
    createProductService,
    getAllProductsService,
    buyProductService,
    getPaymentService,
    getAdvertisteService

} = require("../services/productService");

exports.createProduct = async (req, res, next) => {
    try {
        const result = await createProductService(req.body);
        console.log(result, "result");
        res.status(200).json({
            status: "success",
            message: "Successfully created the Product",
        });
    } catch (error) {
        console.log(error, "error");
        res.status(400).json({
            status: "fail",
            error: "couldn't create the Product",
            message: error,
        });
    }
};

exports.getAllProducts = async (req, res, next) => {
    try {
        const categories = await getAllProductsService();
        res.status(200).json({
            status: "success",
            data: categories,
            message: "Successfully created the brand",
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "couldn't get the categories",
        });
    }
};
exports.buyProduct = async (req, res, next) => {
    try {
        const categories = await buyProductService(req.params.id, req.body.userid);
        res.status(200).json({
            status: "success",
            data: categories,
            message: "Successfully created the brand",
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "couldn't get the categories",
        });
    }
};
exports.paymentProduct = async (req, res, next) => {
    try {
        const categories = await getPaymentService(req.body.productid);
        res.status(200).json({
            status: "success",
            data: categories,
            message: "Successfully created the brand",
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "couldn't get the categories",
        });
    }
};
exports.advertismentProduct = async (req, res, next) => {
    try {
        const categories = await getAdvertisteService(req.body.productid);
        res.status(200).json({
            status: "success",
            data: categories,
            message: "Successfully created the brand",
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "couldn't get the categories",
        });
    }
};
