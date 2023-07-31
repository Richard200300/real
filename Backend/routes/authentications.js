const router = require("express").Router();

const {
    customerSignup,
    customerLogin,
    customerLogout,
    customerForgotPassword,
    customerResetPassword,

    adminSignup,
    adminLogin,
    adminLogout,
    adminForgotPassword,
    adminResetPassword,
} = require("../controller/authentications");

router.route("/customer/signup").post(customerSignup);
router.route("/customer/login").post(customerLogin);
router.route("/customer/logout").get(customerLogout);
router.route("/customer/forgotpassword").put(customerForgotPassword);
router.route("/customer/resetpassword").put(customerResetPassword);

router.route("/admin/signup").post(adminSignup);
router.route("/admin/login").post(adminLogin);
router.route("/admin/logout").get(adminLogout);
router.route("/admin/forgotpassword").put(adminForgotPassword);
router.route("/admin/resetpassword").put(adminResetPassword);

module.exports = router;
