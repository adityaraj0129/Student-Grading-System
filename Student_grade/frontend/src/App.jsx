import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddStudent from "./components/AddStudent";
import AddGrade from "./components/AddGrade";
import EditGrade from "./components/EditGrade";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/addgrades" element={<AddGrade />} />
          <Route path="/editgrade" element={<EditGrade />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
