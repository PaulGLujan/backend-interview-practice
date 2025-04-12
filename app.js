import express from "express";
import getAllMovies from "./queries/getAllMovies.js";
import insertMovie from "./queries/insertMovie.js";

const app = express();
const port = 3000;

app.use(express.json());

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
