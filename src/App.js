import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboards from "./pages/Dashboards";
import Voters from "./pages/Voters";
import Header from "./components/Header";
import "./App.css";
import Suchivalyams from "./pages/Suchivalyams";
import Divisions from "./pages/Divisions";
import Mandels from "./pages/Mandels";
import Constances from "./pages/Constances";
import Partes from "./pages/Partes";
import Reports from "./pages/Reports";
import Booths from "./pages/Booths";


function App() {
  return (
    <Router>
        <Header />
      <Sidebar />
      <div className="main-content">
        
      <Routes>
        <Route path="/" element={<Dashboards/>} />
        <Route path="/voters" element={<Voters />} />
        <Route path="/suchivalyams" element={<Suchivalyams />} />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/mandels" element={<Mandels />} />
        <Route path="/constances" element={<Constances />} />
        <Route path="/Partes" element={<Partes />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="Booths" element={<Booths/>} />
        
      </Routes>
        </div>
    </Router>
  );
}

export default App;
