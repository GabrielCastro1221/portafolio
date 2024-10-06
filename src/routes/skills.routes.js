const express = require("express");
const SkillsController = require("../controller/skills.controller");

const router = express.Router();
const skills = new SkillsController();

router.post("/", skills.createSkills);
router.get("/", skills.getSkills);
router.put("/:id", skills.updateSkills);
router.delete("/:id", skills.deleteSkills);

module.exports = router;