const express = require("express");
const bodyParser = require("body-parser");
const { engine } = require("express-handlebars");
const path = require("path");

const viewsRouter = require("./routes/views.router");
const projectRouter = require("./routes/portafolio.router");

const configObject = require("./config/env.config");
require("./mongoDB");

const app = express();
const port = configObject.server.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use("/", viewsRouter);
app.use("/api/projects", projectRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port} and running in http://localhost:${port}`);
});