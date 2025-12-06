import { useEffect, useState } from "react";

export default function LogsPage() {
  const [logs, setLogs] = useState([]);
  const [searchDate, setSearchDate] = useState("");

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem("searchLogs")) || [];

    const formattedLogs = storedLogs.map((item) => {
      if (typeof item === "string") {
        return {
          city: item,
          value1: Math.floor(20 + Math.random() * 10),
          value2: Math.floor(50 + Math.random() * 20),
          value3: "-",
          date: new Date().toLocaleString(),
        };
      }
      return item;
    });

    setLogs(formattedLogs);
  }, []);

  // แปลงวันที่ใน log ให้ match รูปแบบ input type="date"
  const formatDateForCompare = (dateStr) => {
    const d = new Date(dateStr);
    return d.toISOString().split("T")[0]; // YYYY-MM-DD
  };

  const filteredLogs = logs.filter((item) =>
    searchDate ? formatDateForCompare(item.date) === searchDate : true
  );

  return (
    <div className="logs-container">

      {/* Header box */}
      <div className="log-header-box">
        <h2 className="mb-3">Log Histories</h2>

        {/* Date Picker */}
        <input
          type="date"
          className="form-control search-center-input mb-3"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
      </div>

      {/* Show filtered logs */}
      {filteredLogs.map((item, index) => (
        <div className="log-card" key={index}>
          <div className="log-row">
            <div className="log-item"><span className="log-label">No.</span>{index + 1}</div>
            <div className="log-item"><span className="log-label">Name</span>DHT11</div>
            <div className="log-item"><span className="log-label">Details</span>ติดตั้งอัตโนมัติ</div>
            <div className="log-item"><span className="log-label">Location</span>{item.city}</div>
            <div className="log-item"><span className="log-label">Value1</span>{item.value1}</div>
            <div className="log-item"><span className="log-label">Value2</span>{item.value2}</div>
            <div className="log-item"><span className="log-label">Value3</span>{item.value3}</div>
            <div className="log-item"><span className="log-label">Date</span>{item.date}</div>
          </div>
        </div>
      ))}

    </div>
  );
}
