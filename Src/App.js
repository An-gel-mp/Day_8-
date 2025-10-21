import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Employee App
        </Link>
        <div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">
                Employee Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <table className="table table-bordered table-hover mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EmployeeForm() {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Employee Form</h2>
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation</label>
          <input
            type="text"
            name="designation"
            className="form-control"
            value={form.designation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            name="location"
            className="form-control"
            value={form.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="number"
            name="salary"
            className="form-control"
            value={form.salary}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>

      {submitted && (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Submitted Employee Details</h5>
            <p>
              <strong>Name:</strong> {form.name}
            </p>
            <p>
              <strong>Designation:</strong> {form.designation}
            </p>
            <p>
              <strong>Location:</strong> {form.location}
            </p>
            <p>
              <strong>Salary:</strong> ₹{form.salary}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/form" element={<EmployeeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
