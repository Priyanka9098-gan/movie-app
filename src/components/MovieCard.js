import React from "react";

function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", maxWidth: "300px" }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "100%" }}
      />
      <h2>{movie.title} ({movie.release_date?.slice(0, 4)})</h2>
      <p><strong>Rating:</strong> {movie.vote_average} ⭐</p>
      <p><strong>Overview:</strong> {movie.overview}</p>
      {/* You’ll add Director and Cast later once you fetch credits separately */}
    </div>
  );
}

export default MovieCard;