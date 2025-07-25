import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import { fetchPopularMovies, searchMovies, fetchGenres } from "../api/tmdb";

function Home() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    fetchPopularMovies().then(setMovies);
    fetchGenres().then(setGenres);
  }, []);

  const handleSearch = (query) => {
    searchMovies(query).then(setMovies);
  };

  const handleFilter = (genreId) => {
    setSelectedGenre(genreId);
  };

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre_ids.includes(Number(selectedGenre)))
    : movies;

  return (
    <div style={{ padding: "1rem" }}>
      <SearchBar onSearch={handleSearch} />
      <FilterBar genres={genres} onSelectGenre={handleFilter} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;