import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";

function App() {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/event" element={<AddEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
