import { useState } from "react";

export default function HomePage() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState(null);

  // ข้อมูลกราฟจำลอง (7 วัน)
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
    <div className="container">
      {/* ข้อความต้อนรับ */}
      <h2>Welcome to Rain prediction project</h2>
      

      {/* Search Box */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Weather Info */}
      {forecast && (
        <div style={{ marginBottom: "20px" }}>
          <h2>{forecast.city}</h2>
          <p>Temperature: {forecast.temp}°C</p>
          <p>Rain Chance: {forecast.rain}%</p>
          <p>Humidity: {forecast.humidity}%</p>
          <p>Wind: {forecast.wind} m/s</p>
        </div>
      )}

      {/* Graph Section */}
      <div>
        <h3>Rain Probability Next 7 Days</h3>
        {graphData.map((d, i) => (
          <div key={i}>
            <span>{d.day}: </span>
            <div className="bar" style={{ width: `${d.rain}%` }}>{d.rain}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
