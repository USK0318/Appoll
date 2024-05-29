import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/voters">View Voters</Link>
          </li>
          <li>
            <Link to="/reports">View Reports</Link>
          </li>
          <li className="admin-link">
            <Link>Admin</Link>
            <ul className="sub-list">
              <li><Link to="/Booths">Booths</Link></li>
              <li><Link to="/suchivalyams">Suchivalyams</Link></li>
              <li><Link to="/divisions">Divisions</Link></li>
              <li><Link to="/mandels">Mandels</Link></li>
              <li><Link to="/Constances">Constances</Link></li>
              <li><Link to="/Partes">Partes</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
