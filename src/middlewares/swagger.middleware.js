const configObject = require("../config/env.config");

const swaggerOptions = {
  definition: {
    openapi: configObject.swagger.swagger_openapi,
    info: {
      title: configObject.swagger.swagger_title,
      description: configObject.swagger.swagger_description,
      version: configObject.swagger.swagger_version,
      contact: {
        name: configObject.swagger.swagger_contact_name,
        email: configObject.swagger.swagger_contact_email,
      },
    },
    servers: [
      {
        url: configObject.swagger.swagger_server_url,
        description: configObject.swagger.swagger_server_description,
      },
    ],
  },
  apis: [configObject.swagger.swagger_apis_path],
};

module.exports = { swaggerOptions };
