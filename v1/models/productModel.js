const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a product name"],
        unique: true
    },
    price: {
        type: Number,
        required: [true, "Please provide price product"],

    },
    description: {
        type: String,
        required: [true, "Please provide  product description"],
    },
    condition: {
        type: String,
        required: [true, "Please provide  product condition"],
    },
    location: {
        type: String,
        required: [true, "Please provide  product location"],
    },


    category: {
        name: {
            type: String,
            required: [true, "Please provide  product category"],
        },

        id: {
            type: mongoose.Types.ObjectId,
            ref: 'Category'
        }
    },

    mobile: {
        type: String,
        required: [true, "Please provide  user mobile number"],
    },

    status: {
        type: String,
        default: "available",
        enum: ['available', 'sold'],
    },
    payment: {
        type: String,
        default: "unpaid",
        enum: ['paid', 'unpaid'],
    },
    advertised: {
        type: Boolean,
        default: false
    },
    purchedYear: {
        type: String,

    }
    ,
    userid: {
        type: String,

    }
}, { timestamps: true })


const Product = mongoose.model("Product", productSchema);
module.exports = Product;