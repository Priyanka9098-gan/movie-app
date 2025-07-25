import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) onSearch(query);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        style={{ padding: "0.5rem", width: "250px" }}
      />
      <button onClick={handleSearch} style={{ marginLeft: "0.5rem", padding: "0.5rem" }}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;