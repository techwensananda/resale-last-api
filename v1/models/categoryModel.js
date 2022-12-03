const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a category name"],
        unique: true
    },
    slug: {
        type: String,

        unique: true
    },
    image: {
        type: String,


    },
    productlist: [{
        type: mongoose.Types.ObjectId, ref: 'Product'
    }]
}, { timestamps: true })


const Category = mongoose.model("Category", categorySchema);
module.exports = Category;