const express = require("express");
const path = require("path");
const cors = require("cors");
const configObject = require("./config/env.config");
require("./config/connection.config");
const { corsOpt } = require("./middlewares/cors.middleware");
const { logger } = require("./middlewares/logger.middleware");
const routerKeys = require("./routes/env.routes");
const routerProjects = require("./routes/projects.routes");

const app = express();
const mode = process.argv[2] || "dev"; // Argumento de línea de comando para definir el modo
const port = configObject.server.port;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use("/api/v1/keys", routerKeys);
app.use("/api/v1/projects", routerProjects);

if (mode === "--mode build") {
  app.use(express.static(path.join(__dirname, "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

app.listen(port, () => {
  try {
    logger.info(
      `Server running in ${mode === "--mode build" ? "production" : "development"} mode on port ${port}`
    );
    logger.info(`Server URL: http://localhost:${port}`);
  } catch (err) {
    logger.error("Internal server error", err.message);
  }
});
