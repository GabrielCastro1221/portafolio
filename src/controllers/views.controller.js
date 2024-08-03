const ProjectModel = require("../model/projects.model");
const projectRepository = require("../repositories/portafolio.repository");

const projectR = new projectRepository();

class ViewsManager {
    async renderHome (req, res) {
        try {
            res.render("home")
        } catch (error) {
            console.error("error al renderizar la pagina de inicio");
        }
    }
    
    async renderCV (req, res) {
        try {
            res.render("curriculum")
        } catch (error) {
            console.error("error al renderizar la pagina de curriculum");
        }
    }
    
    async renderProjects (req, res) {
        try {
            const { page = 1, limit = 3, query } = req.query;
            const skip = (page - 1) * limit;
            let queryOptions = {};
              if (query) {
                  queryOptions = { tecnology: query };
              }
              const projects = await ProjectModel.find(queryOptions).skip(skip).limit(limit);
              const totalProjects = await ProjectModel.countDocuments(queryOptions);
              const totalPages = Math.ceil(totalProjects / limit);
              const hasPrevPage = page > 1;
              const hasNextPage = page < totalPages;
              const newArray = projects.map((proyecto) => {
                  const { _id, ...rest } = proyecto.toObject();
                  return { id: _id, ...rest };
              });
              res.render("projects", {
                  proyectos: newArray,
                  hasPrevPage,
                  hasNextPage,
                  prevPage: page > 1 ? parseInt(page) - 1 : null,
                  nextPage: page < totalPages ? parseInt(page) + 1 : null,
                  currentPage: parseInt(page),
                  totalPages,
              });
        } catch (error) {
            console.error("error al renderizar la pagina de los proyectos");
        }
    }

    async renderDetail (req, res) {
            const projId = req.params.pid;
            try {
              const project = await projectR.getProjectById(projId);
              res.render("projectDetail", { project });
        } catch (error) {
            console.error("error al renderizar la pagina de detalle de proyecto");
        }
    }
}

module.exports = ViewsManager;