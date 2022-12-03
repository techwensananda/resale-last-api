const Category = require("../models/categoryModel");

exports.createCategoryService = async (data) => {
    console.log(data, "daaaata")
    const slug = data.name.toLowerCase().split(" ").join("-");
    const send = { name: data.name, slug, image: `http://localhost:7900/${data.image}` }
    const result = await Category.create(send);
    return result;
};
exports.getAllCategoriesService = async () => {
    const categories = await Category.find({}).select('-productlist')
    // const categories = await Category.find({}).populate("productlist");
    return categories;
};
exports.getAllProductsService = async (id) => {
    const categories = await Category.findById(id).populate("productlist");
    // const categories = await Category.find({}).populate("productlist");
    return categories;
};
exports.getdeleteCategoryService = async (id) => {
    const categories = await Category.findByIdAndDelete(id)
    // const categories = await Category.find({}).populate("productlist");
    return categories;
};