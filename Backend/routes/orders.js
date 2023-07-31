const router = require("express").Router();

const {
    createOrderStripe,
    getOrders,
    getOrder,
    updateOrder,
    getOrdersAdmin,
} = require("../controller/orders");
const {
    customerAuthorization,
    adminAuthorization,
} = require("../middleware/adminAuthorization");
const getCartFromCookie = require("../middleware/cartCookie");

router.route("/").get(customerAuthorization, getOrders);
router.route("/admin").get(adminAuthorization, getOrdersAdmin);
router
    .route("/stripe")
    .post(customerAuthorization, getCartFromCookie, createOrderStripe);
router.route("/:id").get(getOrder).put(adminAuthorization, updateOrder);

module.exports = router;
