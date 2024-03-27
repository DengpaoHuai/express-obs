import request from "supertest";

import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import Movie from "../src/models/moviesModel";
import app from "..";

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  //const uri = mongoServer.getUri();
  await mongoose.connect("mongodb://localhost:27017/testing");
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("GET /movie/:id", () => {
  it("should fetch a single movie", async () => {
    // Préparation : Créer un film dans la base de données en mémoire
    const movie = await Movie.create({
      title: "Test Movie 2",
      year: 2021,
      rating: 50,
      actors: ["qsd"],
    });

    // Test : Fetch le film par ID
    const res = await request(app).get(`/movies/${movie._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("title", "Test Movie 2");
  });
});
