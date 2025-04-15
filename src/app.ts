import express from "express";
import config from "./config/config.js";

import { deleteMovie, getAllMovies, insertMovie, updateMovie } from "./queries";
import { validateMovieData } from "./validators";

const app = express();
const port = config.port;

app.use(express.json());

app.use((req, res, next) => {
  validateMovieData(req.body);
  next();
});

app.use("/movie/:id", (req, res, next) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    throw new Error("Invalid ID");
  }

  next();
});

app.get("/movies", async (req, res) => {
  try {
    const movies = await getAllMovies();
    res.json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/movie", async (req, res) => {
  const { title, summary, imdbLink, rating } = req.body;

  try {
    const newMovie = await insertMovie({ title, summary, imdbLink, rating });
    res.status(201).json(newMovie);
  } catch (error) {
    console.error("Error inserting movie:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/movie/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const deletedMovie = await deleteMovie(id);
    if (deletedMovie.length === 0) {
      throw new Error("Movie not found");
    }
    res.status(200).json(deletedMovie);
  } catch (error) {
    console.error("Error deleting movie:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.patch("/movie/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updateData = req.body;
  try {
    const updatedMovie = await updateMovie(id, updateData);
    if (updatedMovie.length === 0) {
      throw new Error("Movie not found");
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    console.error("Error updating movie:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
