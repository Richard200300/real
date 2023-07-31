const mongoose = require("mongoose");

const specialCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        superSpecialCategory: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SuperSpecialCategory",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const SpecialCategory = mongoose.model(
    "SpecialCategory",
    specialCategorySchema
);

module.exports = SpecialCategory;
