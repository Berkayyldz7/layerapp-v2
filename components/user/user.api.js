const express = require("express");
const router = express.Router();

const {getUser, postUser, loginUser} = require("./user.controller")
const {schema} = require("./user.validations")
const validationMiddleware = require("./user.middleware")

router.get("/",getUser)
router.route("/").post(validationMiddleware(schema),postUser)
router.route("/login").post(loginUser)

module.exports = router