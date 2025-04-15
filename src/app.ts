import express from "express";
import config from "./config/config";

import { deleteMovie, getAllMovies, insertMovie, updateMovie } from "./queries";
import { validateMovieData } from "./validators";
import { errorHandler } from "./middlewares/errorHandler";
import { ClientError } from "./errors";

const app = express();
const port = config.port;

app.use(express.json());

app.use((req, res, next) => {
  if (!req.body) {
    next();
    return;
  }
  validateMovieData(req.body);
  next();
});

app.use("/movie/:id", (req, res, next) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    throw new ClientError("Invalid ID", 400);
  }

  next();
});

app.get("/movies", async (req, res) => {
  const movies = await getAllMovies();
  res.json(movies);
});

app.post("/movie", async (req, res) => {
  const { title, summary, imdbLink, rating } = req.body;
  const newMovie = await insertMovie({ title, summary, imdbLink, rating });
  res.status(201).json(newMovie);
});

app.delete("/movie/:id", async (req, res) => {
  const id = Number(req.params.id);
  const deletedMovie = await deleteMovie(id);
  res.status(200).json(deletedMovie);
});

app.patch("/movie/:id", async (req, res) => {
  const id = Number(req.params.id);

  const updatedMovie = await updateMovie(id, req.body);
  res.status(200).json(updatedMovie);
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
