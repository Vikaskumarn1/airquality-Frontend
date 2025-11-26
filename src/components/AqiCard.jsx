function AqiCard({ data }) {
  if (!data) return null;

  return (
    <div className="aqi-card">
      <h2>{data.city}</h2>
      <p className="aqi-value">AQI: {data.aqi}</p>

      <div className="aqi-details">
        <p><strong>Dominant Pollutant:</strong> {data.dominentpol}</p>
        <p><strong>Time:</strong> {data.time}</p>
        <p><strong>Latitude:</strong> {data.latitude}</p>
        <p><strong>Longitude:</strong> {data.longitude}</p>
      </div>
    </div>
  );
}

export default AqiCard;
