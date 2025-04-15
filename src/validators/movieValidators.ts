import type { Movie } from "../models/movie";

export const validateImdbLink = (imdbLink?: string) => {
  if (imdbLink && !imdbLink.startsWith("https://www.imdb.com/title/")) {
    throw new Error("IMDB link is not valid");
  }
};

export const validateRating = (rating?: number) => {
  if (rating !== undefined && (rating < 0 || rating > 5)) {
    throw new Error("Rating must be between 0 and 5");
  }
};

export const validateMovieData = (movieData: Partial<Movie>): void => {
  if (movieData.imdbLink) {
    validateImdbLink(movieData.imdbLink);
  }
  if (movieData.rating !== undefined) {
    validateRating(movieData.rating);
  }
};
