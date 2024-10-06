const educationModel = require("../models/education.model");

class EducationController {
  getEducation = async (req, res) => {
    try {
      const education = await educationModel.find({});
      if (!education) {
        return res
          .status(404)
          .json({ status: false, message: "Educacion no encontrada" });
      }
      return res.status(201).json({
        status: true,
        message: "Educacion encontrada",
        education: education,
      });
    } catch (err) {
      return res.status(500).json({
        status: false,
        message: "Internal server error",
        error: err.message,
      });
    }
  };

  createEducation = async (req, res) => {
    const { starting_date, ending_date, school, degree, description } = req.body;
    try {
      if (!starting_date || !ending_date || !school || !degree || !description) {
        return res.status(401).json({
          status: false,
          message: "Todos los campos son obligatorios",
        });
      }
      const newEducation = new educationModel({
        starting_date,
        ending_date,
        school,
        degree,
        description,
      });
      await newEducation.save();
      return res.status(200).json({
        status: true,
        message: "Educacion creada con exito!",
        education: newEducation,
      });
    } catch (err) {
      return res.status(500).json({
        status: false,
        message: "Internal server error",
        error: err.message,
      });
    }
  };

  updateEducation = async (req, res) => {
    const { id } = req.params;
    try {
      const updateEducation = await educationModel.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      if (!updateEducation) {
        return res
          .status(404)
          .json({ status: false, message: "Educacion no encontrada" });
      }
      return res.status(201).json({
        status: true,
        message: "Educacion actualizada con exito!",
        education: updateEducation,
      });
    } catch (err) {
      return res.status(500).json({
        status: false,
        message: "Internal server error",
        error: err.message,
      });
    }
  };

  deleteEducation = async (req, res) => {
    const { id } = req.params;
    try {
      const deleteEducation = await educationModel.findByIdAndDelete(id);
      if (!deleteEducation) {
        return res
          .status(404)
          .json({ status: false, message: "Educacion no encontrada" });
      }
      return res.status(201).json({
        status: true,
        message: "Educacion eliminada con exito!",
        education: deleteEducation,
      });
    } catch (err) {
      return res.status(500).json({
        status: false,
        message: "Internal server error",
        error: err.message,
      });
    }
  };
}

module.exports = EducationController;
