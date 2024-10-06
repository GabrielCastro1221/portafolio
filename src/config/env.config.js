const dotenv = require("dotenv");
const program = require("./commander.config");

const { mode } = program.opts();
dotenv.config({ path: mode === "dev" ? "./.env.dev" : "./.env.build" });

const configObject = {
  server: {
    port: process.env.PORT || 5000,
    mongo_url: process.env.MONGO_URL,
    cors_origin: process.env.CORS_ORIGIN,
  },
  emailjs: {
    emailjs_service: process.env.SERVICE,
    emailjs_template: process.env.TEMPLATE,
    emailjs_id: process.env.ID,
  },
  logger: {
    log_level: process.env.LOG_LEVEL,
    log_to_file: process.env.LOG_TO_FILE,
    log_file_name: process.env.LOG_FILE_NAME,
  },
  swagger: {
    swagger_title: process.env.SWAGGER_TITLE,
    swagger_description: process.env.SWAGGER_DESCRIPTION,
    swagger_version: process.env.SWAGGER_VERSION,
    swagger_contact_name: process.env.SWAGGER_CONTACT_NAME,
    swagger_contact_email: process.env.SWAGGER_CONTACT_EMAIL,
    swagger_server_url: process.env.SWAGGER_SERVER_URL,
    swagger_server_description: process.env.SWAGGER_SERVER_DESCRIPTION,
    swagger_apis_path: process.env.SWAGGER_APIS_PATH,
    swagger_openapi: process.env.SWAGGER_OPENAPI,
  },
};

module.exports = configObject;
