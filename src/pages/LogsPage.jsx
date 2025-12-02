import { useEffect, useState } from "react";

export default function LogsPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem("searchLogs")) || [];
    setLogs(storedLogs);
  }, []);

  return (
    <div className="container">
      <h1>Search Logs</h1>
      {logs.length === 0 ? (
        <p>No search history yet.</p>
      ) : (
        <ul>
          {logs.map((city, idx) => (
            <li key={idx}>{city}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
