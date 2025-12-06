import { useState } from "react";

export default function HomePage() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);

  const graphData = [
    { day: "Mon", rain: 20 },
    { day: "Tue", rain: 50 },
    { day: "Wed", rain: 70 },
    { day: "Thu", rain: 40 },
    { day: "Fri", rain: 90 },
    { day: "Sat", rain: 30 },
    { day: "Sun", rain: 10 },
  ];

  const handleSearch = () => {
    if (!city) return;

    const data = {
      city,
      temp: (20 + Math.random() * 10).toFixed(1),
      rain: Math.floor(Math.random() * 100),
      humidity: Math.floor(Math.random() * 80),
      wind: (Math.random() * 10).toFixed(1),
    };

    setForecast(data);

    const logs = JSON.parse(localStorage.getItem("searchLogs")) || [];
    localStorage.setItem("searchLogs", JSON.stringify([city, ...logs]));
  };

  return (
    <div className="home-container">

      {/* SEARCH BOX */}
      <div className="search-box">
        <h2 className="text-center">Rain Prediction Project</h2>

        <div className="search-input-row">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* DISPLAY BOX */}
      <div className="display-box">

        {/* Weather Info */}
        {forecast && (
          <div className="weather-info">
            <h2>{forecast.city}</h2>
            <p>Temperature: {forecast.temp}°C</p>
            <p>Rain Chance: {forecast.rain}%</p>
            <p>Humidity: {forecast.humidity}%</p>
            <p>Wind: {forecast.wind} m/s</p>
          </div>
        )}

        {/* Graph */}
        <div className="graph-section">
          <h3>Rain Probability Next 7 Days</h3>

          {graphData.map((d, i) => (
            <div className="graph-row" key={i}>
              <span className="day">{d.day}</span>

              <div
                className="bar"
                style={{ width: `${d.rain}%` }}
              >
                {d.rain}%
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
