import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";

function App() {
  let theToken = localStorage.getItem("weddId");
  const RequireAuth = ({ children }) => {
    return theToken ? children : <Navigate to="/signin" />;
  };
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/event"
            element={
              <RequireAuth>
                <AddEvent />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
