const configObject = require("../config/env.config");

const corsOptions = {
  origin: configObject.server.cors_origin,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
