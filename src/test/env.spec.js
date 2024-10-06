const request = require("supertest");
const express = require("express");
const EnvController = require("../controller/env.controller");

const app = express();
const envController = new EnvController();

app.get("/api/v1/keys", envController.EnviromentVariables);

describe("GET /api/v1/keys", () => {
  it("should return environment variables with status 200", async () => {
    const response = await request(app).get("/api/v1/keys");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: true,
      message: "Variables de entorno obtenidas con exito!",
      serviceID: expect.any(String),
      templateID: expect.any(String),
      userID: expect.any(String),
    });
  });

  it("should return 500 if there is an error", async () => {
    jest.spyOn(envController, "getEnvVariables").mockImplementation(() => {
      throw new Error("Simulated error");
    });

    const response = await request(app).get("/api/v1/keys");
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      status: false,
      message: "error al enviar las variables de entorno",
      Error: "Simulated error",
    });
    envController.getEnvVariables.mockRestore();
  });
});
