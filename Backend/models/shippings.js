const mongoose = require("mongoose");

const shippingSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    },
    fee: {
        type: Number,
    },
    currency: {
        type: String,
        default: "USD",
    },
    description: {
        type: String,
    },
    durationInDays: {
        type: Number,
    },
});

const Shipping = mongoose.model("Shipping", shippingSchema);

module.exports = Shipping;
