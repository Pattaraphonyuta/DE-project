import { Routes, Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import LogsPage from './pages/LogsPage';
import ToolsPage from './pages/ToolsPage';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/logs">Logs</Link>
        <Link to="/tools">Tools</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logs" element={<LogsPage />} />
        <Route path="/tools" element={<ToolsPage />} />
      </Routes>
    </div>
  );
}
