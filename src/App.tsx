import { Routes, Route } from "react-router-dom";
import PatientProfile from "./pages/PatientProfile";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/patients/:id" element={<PatientProfile />} />
        <Route path="/" element={<PatientProfile />} />
      </Routes>
    </div>
  );
}

export default App;
