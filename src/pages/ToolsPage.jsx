export default function ToolsPage() {
  const tools = [
    { name: "DHT11 Sensor", detail: "ใช้วัดอุณหภูมิและความชื้นภายในห้อง" },
    { name: "React + Bootstrap", detail: "ใช้พัฒนา UI ของระบบให้ลื่นไหล" },
    { name: "Firebase", detail: "ใช้เป็นฐานข้อมูล" },
  ];

  return (
    <div className="tools-container">

      {/* Header Box */}
      <div className="tools-header-box">
        <h2 className="mb-2">Devices Used</h2>
        <p className="small-text">
          รายการอุปกรณ์และเทคโนโลยีที่ใช้ในโปรเจคทั้งหมด
        </p>
      </div>

      {/* Tool Cards */}
      <div className="tools-list">
        {tools.map((item, index) => (
          <div className="tool-card" key={index}>
            <h4>{item.name}</h4>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
