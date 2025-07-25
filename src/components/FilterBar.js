import React from "react";

function FilterBar({ genres, onSelectGenre }) {
  return (
    <select onChange={(e) => onSelectGenre(e.target.value)} style={{ marginBottom: "1rem", padding: "0.5rem" }}>
      <option value="">All Genres</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
}

export default FilterBar;