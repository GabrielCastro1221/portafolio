const ProjectRepository = require("../repositories/portafolio.repository");

const projectR = new ProjectRepository();

class ProjectManager {
  async createProject(req, res) {
    const newProj = req.body;
    try {
      const proj = await projectR.createProject(newProj);
      res.status(200).json(proj);
    } catch (error) {
      res.status(500).send("Error al crear proyecto");
    }
  }

  async getProjects(req, res) {
    try {
      let { limit = 10, page = 1, query } = req.query;
      limit = parseInt(limit);
      page = parseInt(page);
      const projs = await projectR.getProjects(limit, page, query);
      res.status(200).json(projs);
    } catch (error) {
      res.status(500).send("Error al obtener proyectos");
    }
  }

  async getProjectsById(req, res) {
    const pid = req.params.pid;
    try {
      const proj = await projectR.getProjectById(pid);
      res.json(proj);
    } catch (error) {
      res.status(500).send("Error al obtener proyecto");
    }
  }

  async updateProject(req, res) {
    try {
      const id = req.params.pid;
      const projectUpdate = req.body;
      const proj = await projectR.updateProject(id, projectUpdate);
      res.json({ proj });
    } catch (error) {
      res.status(500).send("Error al actualizar el proyecto");
    }
  }

  async deleteProject(req, res) {
    const id = req.params.pid;
    try {
      let proj = await projectR.deleteProject(id);
      res.json(proj);
    } catch (error) {
      res.status(500).send("Error al eliminar el proyecto");
    }
  }
}
module.exports = ProjectManager;
