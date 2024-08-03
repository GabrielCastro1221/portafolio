const express = require("express");
const ProjectManager = require("../controllers/portafolio.controller");

const project = new ProjectManager();
const router = express.Router();

router.post("/", project.createProject);
router.get("/", project.getProjects);
router.get("/:pid", project.getProjectsById);
router.put("/:pid", project.updateProject);
router.delete("/:pid", project.deleteProject);

module.exports = router;