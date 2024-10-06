const express = require("express");
const path = require("path");
const cors = require("cors");
const configObject = require("./config/env.config");
const { corsOpt } = require("./middlewares/cors.middleware");
const { logger } = require("./middlewares/logger.middleware");
const routerKeys = require("./routes/email.routes");
const routerProjects = require("./routes/projects.routes");
require("./config/connection.config");

const app = express();
const port = configObject.server.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOpt));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/keys", routerKeys);
app.use("/api/v1/projects", routerProjects);

app.listen(port, () => {
  try {
    logger.info(
      `Server listening on port ${port} and ruuning on URL http://localhost:${port}`
    );
  } catch (err) {
    logger.error("Internal server error", err.message);
  }
});
