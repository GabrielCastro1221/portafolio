const express = require("express");
const EducationController = require("../controller/education.controller");

const router = express.Router();
const education = new EducationController();

router.get("/", education.getEducation);
router.post("/", education.createEducation);
router.put("/:id", education.updateEducation);
router.delete("/:id", education.deleteEducation);

module.exports = router;