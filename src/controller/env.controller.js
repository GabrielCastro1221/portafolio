const configObject = require("../config/env.config");

class EnvController {
  EnviromentVariables = async (req, res) => {
    try {
      res.status(200).json({
        serviceID: configObject.emailjs.emailjs_service,
        templateID: configObject.emailjs.emailjs_template,
        userID: configObject.emailjs.emailjs_id,
      });
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
