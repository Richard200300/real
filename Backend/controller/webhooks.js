const Order = require("../models/orders");
const stripe = require("stripe")(process.env.STRIPE_SECRETE_KEY);

const stripeWebhook = async (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;
    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRETE
        );
    } catch (err) {
        console.log(err);
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    const client_secrete = event.data.object.client_secret;
    if (!client_secrete) return res.status(200).send("No client_secrete found");

    const order = await Order.findOne({ client_secrete });
    if (!order) {
        return res.status(200).send();
    }

    switch (event.type) {
        case "payment_intent.canceled":
            order.paymentStatus = "canceled";
            break;
        case "payment_intent.payment_failed":
            order.paymentStatus = "failed";
            break;
        case "payment_intent.processing":
            order.paymentStatus = "processing";
            break;
        case "payment_intent.succeeded":
            order.paymentStatus = "successful";
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    await order.save();

    res.status(200).send();
};

const flutterwaveWebhook = async (req, res) => {
    res.status(200).send();
};

module.exports = {
    stripeWebhook,
    flutterwaveWebhook,
};
