import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import People from "./pages/People";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}
