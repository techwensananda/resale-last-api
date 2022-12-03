const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provided a title of user"]
    },
    email: {
        type: String,
        required: [true, "Please provided  email"]
    },
    role: {
        type: String,
        default: 'buyer',
        enum: ['buyer', 'seller', 'admin'],
    },
    status: {
        type: String,
        default: 'unverified',
        enum: ['unverified', 'verified'],
    },


    picture: {
        type: String,
    },
    productlist: [{
        type: mongoose.Types.ObjectId, ref: 'Product'
    }],
    buyproductlist: [{
        type: mongoose.Types.ObjectId, ref: 'Product'
    }],
    buyerlist: [{
        type: mongoose.Types.ObjectId, ref: 'User'
    }],



}, { timestamps: true })


const User = mongoose.model("User", userSchema);
module.exports = User;