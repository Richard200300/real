const mongoose = require("mongoose");

const superSpecialCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const SuperSpecialCategory = mongoose.model(
    "SuperSpecialCategory",
    superSpecialCategorySchema
);

module.exports = SuperSpecialCategory;
