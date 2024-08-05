const ProjectModel = require("../model/projects.model");

class ProjectRepository {
  async createProject({ title, description, image, repository_link, deploy_link, tecnology }) {
    try {
      if (!title || !description || !image || !repository_link || !tecnology) {
        console.warn("Todos los campos son obligatorios");
        return;
      }
      const newProject = new ProjectModel({
        title,
        description,
        image,
        repository_link,
        deploy_link,
        tecnology
      });
      await newProject.save();
      return newProject;
    } catch (error) {
      throw new Error("Error al crear proyecto");
    }
  }

  async getProjects(limit = 10, page = 1, query) {
    try {
      const skip = (page - 1) * limit;
      let queryOptions = {};
      if (query) {
        queryOptions = { tecnology: query };
      }
      const projects = await ProjectModel.find(queryOptions)
        .skip(skip)
        .limit(limit);
      const totalProjects = await ProjectModel.countDocuments(queryOptions);
      const totalPages = Math.ceil(totalProjects / limit);
      const hasPrevPage = page > 1;
      const hasNextPage = page < totalPages;
      return {
        projects: projects,
        totalPages,
        prevPage: hasPrevPage ? page - 1 : null,
        nextPage: hasNextPage ? page + 1 : null,
        page,
        hasPrevPage,
        hasNextPage,
        prevLink: hasPrevPage
          ? `/api/projects?limit=${limit}&page=${page - 1}&query=${query}`
          : null,
        nextLink: hasNextPage
          ? `/api/projects?limit=${limit}&page=${page + 1}&query=${query}`
          : null,
      };
    } catch (error) {
      throw new Error("Error al obtener los proyectos");
    }
  }

  async getProjectById(id) {
    try {
      const project = await ProjectModel.findById(id);
      if (!project) {
        console.warn("proyecto no encontrado");
      }
      return project;
    } catch (error) {
      throw new Error("El proyecto no existe");
    }
  }

  async updateProject(id, proyectoActualizado) {
    try {
      const update = await ProjectModel.findByIdAndUpdate(id, proyectoActualizado);
      if (!update) {
        console.warn("Proyecto no encontrado");
        return null;
      }
      console.log("Proyecto actualizado");
      return update;
    } catch (error) {
      throw new Error("Error al actualizar el proyecto");
    }
  }

  async deleteProject(id) {
    try {
      const deleteProj = await ProjectModel.findByIdAndDelete(id);
      if (!deleteProj) {
        console.warn("Proyecto no encontrado");
        return null;
      }
      console.log("Proyecto eliminado");
      return deleteProj;
    } catch (error) {
      throw new Error("Error al eliminar el proyecto");
    }
  }
}

module.exports = ProjectRepository;