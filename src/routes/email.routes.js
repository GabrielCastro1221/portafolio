const express = require("express");
const EmailjsController = require("../controller/email.controller");

const router = express.Router();
const emailjs = new EmailjsController();

router.get("/", emailjs.EnviromentVariables);

module.exports = router;