require("dotenv").config();

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
};

module.exports = configObject;
