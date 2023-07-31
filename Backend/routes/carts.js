const router = require("express").Router();

const {
    getCart,
    editCart,
    removeItem,
    clearCart,
} = require("../controller/carts");
const getCartFromCookie = require("../middleware/cartCookie");

router
    .route("/")
    .get(getCartFromCookie, getCart)
    .put(getCartFromCookie, editCart)
    .delete(getCartFromCookie, clearCart);
router.route("/removeItem").delete(getCartFromCookie, removeItem);

module.exports = router;
