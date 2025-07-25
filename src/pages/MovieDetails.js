import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/tmdb";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem", maxWidth: "700px", margin: "auto" }}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
    </div>
  );
}

export default MovieDetail;