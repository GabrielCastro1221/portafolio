const express = require("express");
const ViewsManager = require("../controllers/views.controller");

const views = new ViewsManager();
const router = express.Router();

router.get("/", views.renderHome);
router.get("/curriculum", views.renderCV);
router.get("/projects", views.renderProjects);
router.get("/project/:pid", views.renderDetail);

module.exports = router;