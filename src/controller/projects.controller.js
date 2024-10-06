const projectModel = require("../models/projects.model");

class ProjectsController {
  getProjects = async (req, res) => {
    try {
      const projects = await projectModel.find();
      if (!projects) {
        res
          .status(404)
          .json({ status: false, message: "Proyectos no encontrados" });
      }
      res.status(201).json({
        status: true,
        message: "Proyectos encontros",
        proyectos: projects,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        message: "Error al obtener los proyectos",
        error: err.message,
      });
    }
  };

  getProject = async (req, res) => {
    const { id } = req.params;
    try {
      const project = await projectModel.findById(id);
      if (!project) {
        res
          .status(404)
          .json({ status: false, message: "Proyecto no encontrado" });
      }
      res.status(200).json({
        status: true,
        message: "Proyecto encontrado",
        project: project,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        message: "Error al obtener el proyecto",
        error: err.message,
      });
    }
  };

  createProject = async (req, res) => {
    const { img, title, description, repository_link, deploy_link } = req.body;
    try {
      if (!img && !title && !description && !repository_link && !deploy_link) {
        res.status(401),
          json({ status: false, message: "Todos los campos son obligatorios" });
        return;
      }
      const newProject = new projectModel({
        img,
        title,
        description,
        repository_link,
        deploy_link,
      });
      await newProject.save();
      res.status(200).json({
        status: true,
        message: "proyecto creado con exito!",
        proyecto: newProject,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        message: "Error interno del servidor",
        error: err.message,
      });
    }
  };

  updateProject = async (req, res) => {
    const { id } = req.params;
    try {
      const updateProject = await projectModel.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      if (!updateProject) {
        res
          .status(404)
          .json({ status: false, message: "Proyecto no encontrado" });
      }
      res
        .status(200)
        .json({
          status: true,
          message: "Proyecto actualizado con exito!",
          project: updateProject,
        });
    } catch (err) {
      res.status(500).json({
        status: false,
        message: "Error interno del servidor",
        error: err.message,
      });
    }
  };

  deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
      const project = await projectModel.findByIdAndDelete(id);
      if (!project) {
        res
          .status(404)
          .json({ status: false, message: "Proyecto no encontrado" });
      }
      res.status(200).json({
        status: true,
        message: "Proyecto eliminado con exito!",
        project: project,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        message: "Error al eliminar el proyecto",
        error: err.message,
      });
    }
  };
}

module.exports = ProjectsController;
