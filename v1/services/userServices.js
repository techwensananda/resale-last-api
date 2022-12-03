const User = require("../models/userModel");

exports.createUserService = async (data) => {
    const user = await User.create(data)
    return user;
};
exports.getAllUserService = async () => {
    console.log(" user all first")
    const users = await User.find({})
    console.log(users)
    return users;
};
exports.getMyOrdersService = async (id) => {
    const user = await User.findById(id).populate("buyproductlist")
    return user;
};
exports.getMyProductsService = async (id) => {
    const user = await User.findById(id).populate("productlist").select('-buyerlist -buyproductlist')
    return user;
};
exports.getMyBuyersService = async (id) => {
    const user = await User.findById(id).populate("buyerlist")
    console.log(user, "sdkjfkj")
    return user;
};

exports.getAllSellerService = async () => {
    const user = await User.find({ role: 'seller' })
    console.log("celler", user)
    return user;
};

exports.getAllBuyerService = async () => {
    const user = await User.find({ role: 'buyer' })
    return user;
}

exports.getVerifyUserService = async (id) => {
    const user = await User.findByIdAndUpdate(id, { status: "verified" })
    return user;
}

exports.getDeleteUserService = async (id) => {
    const user = await User.findByIdAndDelete(id)
    return user;
};