const corsOptions = {
  origin: mode === "--mode build" ? configObject.server.cors_origin : "http://localhost:3000",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};