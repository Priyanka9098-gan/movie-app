import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// ✅ Fetch popular movies
export const fetchPopularMovies = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return res.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error.message);
    return [];
  }
};

// ✅ Search movies by title
export const searchMovies = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    return res.data.results;
  } catch (error) {
    console.error("Error searching movies:", error.message);
    return [];
  }
};

// ✅ Fetch detailed movie info
export const fetchMovieDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return res.data;
  } catch (error) {
    console.error(`Error fetching details for movie ID ${id}:`, error.message);
    return null;
  }
};

// ✅ Fetch list of genres
export const fetchGenres = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    return res.data.genres;
  } catch (error) {
    console.error("Error fetching genres:", error.message);
    return [];
  }
};