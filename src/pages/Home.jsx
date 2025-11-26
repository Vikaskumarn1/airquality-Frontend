import { useState } from "react";
import SearchBox from "../components/SearchBox";
import AqiCard from "../components/AqiCard";
import api from "../services/api";
import "./Home.css"; 

function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const searchCity = async (city) => {
    try {
      setError("");
      const response = await api.get(`/aqi/${city}`);
      setData(response.data);
    } catch (err) {
      setError("City not found or API error");
      setData(null);
    }
  };

  return (
    <div className="home-container">
      <div className="card fadeIn">
        <h1 className="title">🌍 Air Quality Index Search</h1>

        <p className="subtitle">Check real-time AQI for any city worldwide.</p>

        <SearchBox onSearch={searchCity} />

        {error && <p className="error">{error}</p>}

        <AqiCard data={data} />
      </div>
    </div>
  );
}

export default Home;
