const router = require("express").Router();

const {
    createShippingDetails,
    getShippingDetails,
    updateShippingDetails,
    deleteShippingDetails,
} = require("../controller/shippings");

const { adminAuthorization } = require("../middleware/adminAuthorization");

router
    .route("/")
    .get(adminAuthorization, getShippingDetails)
    .post(adminAuthorization, createShippingDetails);

router
    .route("/:id")
    .put(adminAuthorization, updateShippingDetails)
    .delete(adminAuthorization, deleteShippingDetails);

module.exports = router;
