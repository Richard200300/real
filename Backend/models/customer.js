const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;

// Demo 2: Create a customer
const CustomerDemo = {
    name: "John Doe",
    email: "johnDoe@gmail.com",
    password: "123456",
    phone: "1234567890",
    address: "123 Main St",
    city: "Ikorodu",
    state: "Lagos",
};
        
