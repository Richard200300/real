const Shipping = require("../models/shippings");
const mongoose = require("mongoose");
const { BadRequestError } = require("../errors");

const createShippingDetails = async (req, res) => {
    const { name, fee, description, durationInDays } = req.body;

    if (!name || !fee || !description || !durationInDays) {
        throw new BadRequestError("All fields are required");
    }

    const shipping = await Shipping.create(req.body);

    res.status(201).json({
        msg: "Shipping details created",
        shipping,
    });
};

const getShippingDetails = async (req, res) => {
    const shipping = await Shipping.find();

    res.status(200).json({ nbHits: shipping.length, shipping });
};

const updateShippingDetails = async (req, res) => {
    const { name, fee, description, durationInDays } = req.body;
    if (!name || !fee || !description || !durationInDays) {
        throw new BadRequestError("All fields are required");
    }

    if (!mongoose.isValidObjectId(req.params.id)) {
        throw new BadRequestError("Shipping Id is not valid");
    }

    const shipping = await Shipping.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        msg: "Shipping details updated",
        shipping,
    });
};

const deleteShippingDetails = async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        throw new BadRequestError("Shipping Id is not valid");
    }
    const shipping = await Shipping.findByIdAndDelete(req.params.id);

    res.status(200).json({
        msg: "Shipping details deleted",
        shipping,
    });
};

module.exports = {
    createShippingDetails,
    getShippingDetails,
    updateShippingDetails,
    deleteShippingDetails,
};
