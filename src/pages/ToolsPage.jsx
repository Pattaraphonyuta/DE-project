export default function ToolsPage() {
  const data = [
    { day: "Mon", rain: 20 },
    { day: "Tue", rain: 50 },
    { day: "Wed", rain: 70 },
    { day: "Thu", rain: 40 },
    { day: "Fri", rain: 90 },
    { day: "Sat", rain: 30 },
    { day: "Sun", rain: 10 },
  ];

  return (
    <div className="container">
      <h1>Rain Probability Next 7 Days</h1>
      {data.map((d, i) => (
        <div key={i}>
          <span>{d.day}: </span>
          <div className="bar" style={{width: `${d.rain}%`}}>{d.rain}%</div>
        </div>
      ))}
    </div>
  );
}
