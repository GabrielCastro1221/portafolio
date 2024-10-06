const express = require("express");
const ProjectsController = require("../controller/projects.controller");

const router = express.Router();
const projects = new ProjectsController();

router.get("/", projects.getProjects);
router.get("/:id", projects.getProject);
router.post("/", projects.createProject);
router.put("/:id", projects.updateProject);
router.delete("/:id", projects.deleteProject);

module.exports = router;