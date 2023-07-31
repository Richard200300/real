const mongoose = require("mongoose");

const productImageSchema = new mongoose.Schema(
    {
        Product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    },
    {
        timestamps: true,
    }
);

const ProductImage = mongoose.model("ProductImage", productImageSchema);

module.exports = ProductImage;
