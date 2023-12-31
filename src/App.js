import Dashboard from "./Component/Dashboard";
import Graph from "./Component/Graph";
import Login from "./Component/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </div>
  );
}

export default App;
