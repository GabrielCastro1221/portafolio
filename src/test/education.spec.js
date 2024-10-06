const request = require("supertest");
const express = require("express");
const EducationController = require("../controller/education.controller");
const educationModel = require("../models/education.model");

jest.mock("../models/education.model");

const app = express();
app.use(express.json());

const educationController = new EducationController();

app.get("/api/v1/education", educationController.getEducation);
app.post("/api/v1/education", educationController.createEducation);
app.put("/api/v1/education/:id", educationController.updateEducation);
app.delete("/api/v1/education/:id", educationController.deleteEducation);

describe("EducationController", () => {
  describe("GET /api/v1/education", () => {
    it("should return education data with status 201", async () => {
      const educationData = [
        { id: 1, school: "Test School", degree: "Test Degree" },
      ];
      educationModel.find.mockResolvedValue(educationData);

      const response = await request(app).get("/api/v1/education");
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        status: true,
        message: "Educacion encontrada",
        education: educationData,
      });
    });

    it("should return 404 if no education data found", async () => {
      educationModel.find.mockResolvedValue(null);

      const response = await request(app).get("/api/v1/education");
      expect(response.status).toBe(404);
      expect(response.body).toEqual({
        status: false,
        message: "Educacion no encontrada",
      });
    });

    it("should return 500 if there is an error", async () => {
      educationModel.find.mockRejectedValue(new Error("Simulated error"));

      const response = await request(app).get("/api/v1/education");
      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        status: false,
        message: "Internal server error",
        error: "Simulated error",
      });
    });
  });

  describe("POST /api/v1/education", () => {
    it("should create education data with status 200", async () => {
      const newEducation = {
        starting_date: "2023-01-01",
        ending_date: "2023-12-31",
        school: "New School",
        degree: "New Degree",
        description: "Description",
      };
      const savedEducation = {
        _id: "123456",
        ...newEducation,
      };
      educationModel.prototype.save.mockResolvedValue(savedEducation);

      const response = await request(app)
        .post("/api/v1/education")
        .send(newEducation);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        status: true,
        message: "Educacion creada con exito!",
        education: savedEducation,
      });
    });

    it("should return 401 if any field is missing", async () => {
      const incompleteEducation = {
        starting_date: "",
        ending_date: "",
        school: "",
        degree: "",
        description: "",
      };

      const response = await request(app)
        .post("/api/v1/education")
        .send(incompleteEducation);
      expect(response.status).toBe(401);
      expect(response.body).toEqual({
        status: false,
        message: "Todos los campos son obligatorios",
      });
    });

    it("should return 500 if there is an error", async () => {
      const newEducation = {
        starting_date: "2023-01-01",
        ending_date: "2023-12-31",
        school: "New School",
        degree: "New Degree",
        description: "Description",
      };
      educationModel.prototype.save.mockRejectedValue(
        new Error("Simulated error")
      );

      const response = await request(app)
        .post("/api/v1/education")
        .send(newEducation);
      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        status: false,
        message: "Internal server error",
        error: "Simulated error",
      });
    });
  });

  describe("PUT /api/v1/education/:id", () => {
    it("should update education data with status 201", async () => {
      const updatedEducation = {
        id: 1,
        school: "Updated School",
        degree: "Updated Degree",
      };
      educationModel.findByIdAndUpdate.mockResolvedValue(updatedEducation);

      const response = await request(app)
        .put("/api/v1/education/1")
        .send(updatedEducation);
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        status: true,
        message: "Educacion actualizada con exito!",
        education: updatedEducation,
      });
    });

    it("should return 404 if education not found", async () => {
      educationModel.findByIdAndUpdate.mockResolvedValue(null);

      const response = await request(app)
        .put("/api/v1/education/1")
        .send({ school: "Updated School" });
      expect(response.status).toBe(404);
      expect(response.body).toEqual({
        status: false,
        message: "Educacion no encontrada",
      });
    });

    it("should return 500 if there is an error", async () => {
      educationModel.findByIdAndUpdate.mockRejectedValue(
        new Error("Simulated error")
      );

      const response = await request(app)
        .put("/api/v1/education/1")
        .send({ school: "Updated School" });
      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        status: false,
        message: "Internal server error",
        error: "Simulated error",
      });
    });
  });

  describe("DELETE /api/v1/education/:id", () => {
    it("should delete education data with status 201", async () => {
      const deletedEducation = {
        id: 1,
        school: "Deleted School",
        degree: "Deleted Degree",
      };
      educationModel.findByIdAndDelete.mockResolvedValue(deletedEducation);

      const response = await request(app).delete("/api/v1/education/1");
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        status: true,
        message: "Educacion eliminada con exito!",
        education: deletedEducation,
      });
    });

    it("should return 404 if education not found", async () => {
      educationModel.findByIdAndDelete.mockResolvedValue(null);

      const response = await request(app).delete("/api/v1/education/1");
      expect(response.status).toBe(404);
      expect(response.body).toEqual({
        status: false,
        message: "Educacion no encontrada",
      });
    });

    it("should return 500 if there is an error", async () => {
      educationModel.findByIdAndDelete.mockRejectedValue(
        new Error("Simulated error")
      );

      const response = await request(app).delete("/api/v1/education/1");
      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        status: false,
        message: "Internal server error",
        error: "Simulated error",
      });
    });
  });
});
