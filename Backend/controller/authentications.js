const { ForbiddenError, NotFoundError, BadRequestError } = require("../errors");
const bcrypt = require("bcryptjs");
const Customer = require("../models/customer");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

const customerSignup = async (req, res) => {
    // check if balance field is filled
    if (req.body.emailVerified) {
        throw new ForbiddenError("Forbidden field - emailVerified");
    }

    // check if email exist in db
    const emailExist = await Customer.findOne({
        email: req.body.email,
    });
    if (emailExist) {
        throw new BadRequestError("Email already exists, Try another");
    }
    // check if phone exist in db
    const phoneExist = await Customer.findOne({
        phone: req.body.phone,
    });
    if (phoneExist) {
        throw new BadRequestError("Phone already exists, Try another");
    }

    // hash password and pin
    req.body.password = await bcrypt.hash(req.body.password, 10);

    // create customer
    const customer = await Customer.create(req.body);

    // create payload for jwt
    const payload = { id: customer._id };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });

    res.cookie("customerToken", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: false,
        // secure: true,
        signed: true,
        // sameSite: 'none',
        // domain: 'https://p-pay-pr3c10us.vercel.app',
    }).json({
        msg: "Signup Successful",
    });
};

const customerLogin = async (req, res) => {
    const { email, password } = req.body;
    // Check if email and password are provided
    if (!email || !password) {
        throw new BadRequestError("Please provide your email and password");
    }

    // get customer info of provided email
    const customer = await Customer.findOne({
        $or: [{ email: email }, { phone: email }],
    });

    // check if customer exist
    if (!customer) {
        throw new NotFoundError("customer does not exist");
    }

    // check if password match
    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
        throw new BadRequestError("The password you entered is incorrect");
    }

    // create payload for jwt
    const payload = { id: customer._id };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });

    res.cookie("customerToken", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: false,
        // secure: true,
        signed: true,
        // sameSite: 'none',
        // domain: 'https://p-pay-pr3c10us.vercel.app',
    }).json({
        msg: "Login Successful",
    });
};

const customerLogout = async (req, res) => {
    res.cookie("customerToken", "", {
        expires: new Date(Date.now() + 1000),
    }).json({ msg: "Successfully Logged Out!!!" });
};

const customerForgotPassword = async (req, res) => {
    res.send("customer forgot password");
};

const customerResetPassword = async (req, res) => {
    res.send("customer reset password");
};

const adminSignup = async (req, res) => {
    // check if balance field is filled
    if (req.body.emailVerified) {
        throw new ForbiddenError("Forbidden field - emailVerified");
    }

    // check if email exist in db
    const emailExist = await Admin.findOne({
        email: req.body.email,
    });
    if (emailExist) {
        throw new BadRequestError("Email already exists, Try another");
    }
    // check if phone exist in db
    const phoneExist = await Admin.findOne({
        phone: req.body.phone,
    });
    if (phoneExist) {
        throw new BadRequestError("Phone already exists, Try another");
    }

    // hash password and pin
    req.body.password = await bcrypt.hash(req.body.password, 10);

    // create admin
    const admin = await Admin.create(req.body);

    // create payload for jwt
    const payload = { id: admin._id };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });

    res.cookie("adminToken", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: false,
        // secure: true,
        signed: true,
        // sameSite: 'none',
        // domain: 'https://p-pay-pr3c10us.vercel.app',
    }).json({
        msg: "Signup Successful",
    });
};

const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    // Check if email and password are provided
    if (!email || !password) {
        throw new BadRequestError("Please provide your email and password");
    }

    // get admin info of provided email
    const admin = await Admin.findOne({
        $or: [{ email: email }, { phone: email }],
    });

    // check if admin exist
    if (!admin) {
        throw new NotFoundError("admin does not exist");
    }

    // check if password match
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        throw new BadRequestError("The password you entered is incorrect");
    }

    // create payload for jwt
    const payload = { id: admin._id };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });

    res.cookie("adminToken", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: false,
        // secure: true,
        signed: true,
        // sameSite: 'none',
        // domain: 'https://p-pay-pr3c10us.vercel.app',
    }).json({
        msg: "Login Successful",
    });
};

const adminLogout = async (req, res) => {
    res.cookie("adminToken", "", {
        expires: new Date(Date.now() + 1000),
    }).json({ msg: "Successfully Logged Out!!!" });
};

const adminForgotPassword = async (req, res) => {
    res.send("admin forgot password");
};

const adminResetPassword = async (req, res) => {
    res.send("admin reset password");
};

module.exports = {
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
};
