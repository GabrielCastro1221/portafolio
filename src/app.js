const express = require("express");
const path = require("path");
const cors = require("cors");
const swaggerUiExpress = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const configObject = require("./config/env.config");
require("./config/connection.config");
const { corsOpt } = require("./middlewares/cors.middleware");
const { logger } = require("./middlewares/logger.middleware");
const { swaggerOptions } = require("./middlewares/swagger.middleware");
const routerKeys = require("./routes/env.routes");
const routerProjects = require("./routes/projects.routes");
const routerEducation = require("./routes/education.routes");
const routerSkill = require("./routes/skills.routes");

const app = express();
const port = configObject.server.port;
const specs = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOpt));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/keys", routerKeys);
app.use("/api/v1/projects", routerProjects);
app.use("/api/v1/education", routerEducation);
app.use("/api/v1/skills", routerSkill);
app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

app.listen(port, () => {
  try {
    logger.info(
      `Server listening on port ${port} and ruuning on URL http://localhost:${port}`
    );
  } catch (err) {
    logger.error("Internal server error", err.message);
  }
});
