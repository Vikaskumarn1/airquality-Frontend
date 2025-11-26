import { useState } from "react";

function SearchBox({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="search-box">
      <input
        type="search"
        placeholder="Enter city name (e.g., Bengaluru)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
