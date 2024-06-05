import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import SuccessPage from "./SuccessPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/blank" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
