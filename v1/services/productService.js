const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const User = require("../models/userModel");


exports.createProductService = async (data) => {
    // console.log(data, "daaaata")
    // const slug = data.name.toLowerCase().split(" ").join("-");
    // const send = { name: data.name, slug }
    const result = await Product.create(data);
    await Category.updateOne({ _id: data.category.id }, { $push: { productlist: result._id } })
    await User.updateOne({ _id: data.userid }, { $push: { productlist: result._id } })
    console.log(data.userid)
    return result;
};
exports.getAllProductsService = async () => {
    const categories = await Product.find({})
    // console.log(categories)
    return categories;
};
exports.buyProductService = async (id, userid) => {
    const product = await Product.findByIdAndUpdate(id, { status: "sold" })
    const userinfo = await User.findByIdAndUpdate(userid, { $push: { buyproductlist: id } })
    const selerInfo = await User.findByIdAndUpdate(product.userid, { $push: { buyerlist: userid } })
    // console.log(product)
    return { product, userinfo, selerInfo };
};

exports.getPaymentService = async (id) => {
    const categories = await Product.findByIdAndUpdate(id, { payment: "paid" })
    console.log(categories)
    return categories;
};
exports.getAdvertisteService = async (id) => {
    const categories = await Product.findByIdAndUpdate(id, { advertised: true })
    console.log(categories)
    return categories;
};