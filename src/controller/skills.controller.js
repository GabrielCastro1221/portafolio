const skillsModel = require("../models/skills.model");

class SkillsController {
  getSkills = async (req, res) => {
    try {
      const skills = await skillsModel.find({});
      if (!skills) {
        res
          .status(404)
          .json({ status: false, message: "Skills no encontradas" });
      }
      res
        .status(201)
        .json({ status: true, message: "Skills encontradas", skills: skills });
    } catch (err) {
      res.status(500).json({ status: false, message: "Internal server error" });
    }
  };

  createSkills = async (req, res) => {
    const { starting_date, ending_date, degree, skills } = req.body;
    try {
      if (!starting_date && !ending_date && !degree && !skills) {
        res.status(401).json({
          status: false,
          message: "Todos los campos son obligatorios",
        });
      }
      const newSkill = new skillsModel({
        starting_date,
        ending_date,
        degree,
        skills,
      });
      await newSkill.save();
      res.status(200).json({
        status: true,
        message: "Skill creada con exito!",
        skill: newSkill,
      });
    } catch (err) {
      res.status(500).json({ status: false, message: "Internal server error" });
    }
  };

  updateSkills = async (req, res) => {
    const { id } = req.params;
    try {
      const updateSkill = await skillsModel.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      if (!updateSkill) {
        res.status(404).json({ status: false, message: "Skill no encontrada" });
      }
      res.status(201).json({
        status: true,
        message: "Skill actualizada con exito",
        skill: updateSkill,
      });
    } catch (err) {
      res.status(500).json({ status: false, message: "Internal server error" });
    }
  };

  deleteSkills = async (req, res) => {
    const { id } = req.params;
    try {
      const deleteSkill = await skillsModel.findByIdAndDelete(id);
      if (!deleteSkill) {
        res.status(404).json({ status: false, message: "Skill no encontrada" });
      }
      res
        .status(201)
        .json({
          status: true,
          message: "Skill eliminada con ecito!",
          skill: deleteSkill,
        });
    } catch (err) {
      res.status(500).json({ status: false, message: "Internal server error" });
    }
  };
}

module.exports = SkillsController;
