const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/user.js");

router.get("/get-password", user_controller.generatePassword);

module.exports = router;
