const configObject = require("../config/env.config");

class EnvController {
  async getEnvVariables() {
    return {
      status: true,
      message: "Variables de entorno obtenidas con exito!",
      serviceID: configObject.emailjs.emailjs_service,
      templateID: configObject.emailjs.emailjs_template,
      userID: configObject.emailjs.emailjs_id,
    };
  }

  EnviromentVariables = async (req, res) => {
    try {
      const envVariables = await this.getEnvVariables();
      res.status(200).json(envVariables);
    } catch (err) {
      res.status(500).json({
        status: false,
        message: "error al enviar las variables de entorno",
        Error: err.message,
      });
    }
  };
}

module.exports = EnvController;
