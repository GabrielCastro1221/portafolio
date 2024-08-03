const dotenv = require("dotenv");
const program = require("./commander.config");

const { mode } = program.opts();

dotenv.config({
  path: mode === "dev" ? "./.env.dev" : "./.env.build",
});

const configObject = {
  server: {
    mongo_url: process.env.MONGO_URL,
    port: process.env.PORT || 5000,
  },
};

module.exports = configObject;
