const router = require("express").Router();
const express = require("express");


const { stripeWebhook, flutterwaveWebhook } = require("../controller/webhooks");

router.post(
    "/stripe",
    express.raw({ type: "application/json" }),
    stripeWebhook
);
router.post("/flutterwave", flutterwaveWebhook);

module.exports = router;
