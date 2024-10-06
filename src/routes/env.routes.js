const express = require("express");
const EnvController = require("../controller/env.controller");

const router = express.Router();
const env = new EnvController();

router.get("/", env.EnviromentVariables);

module.exports = router;