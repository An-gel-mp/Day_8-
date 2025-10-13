import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Employee Dashboard</Link>
        <div>
          <Link className="btn btn-outline-light mx-2" to="/">Home</Link>
          <Link className="btn btn-outline-light mx-2" to="/add">Employee Form</Link>
        </div>
      </div>
    </nav>
  );
}
