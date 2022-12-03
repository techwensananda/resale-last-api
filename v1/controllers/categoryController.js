const {
    createCategoryService,
    getAllCategoriesService,
    getAllProductsService,
    getdeleteCategoryService
} = require("../services/categortService");

exports.createCategory = async (req, res, next) => {
    try {
        const result = await createCategoryService(req.body);
        console.log(result, "result");
        res.status(200).json({
            status: "success",
            message: "Successfully created the Category",
        });
    } catch (error) {
        console.log(error, "error");
        res.status(400).json({
            status: "fail",
            error: "couldn't create the Category",
            message: error,
        });
    }
};

exports.getAllCategories = async (req, res, next) => {
    try {
        const categories = await getAllCategoriesService();
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

exports.getProductsCategorie = async (req, res, next) => {
    try {
        const categories = await getAllProductsService(req.params.id);
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

exports.getDeleteCategorie = async (req, res, next) => {
    try {
        const categories = await getdeleteCategoryService(req.params.id);
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
