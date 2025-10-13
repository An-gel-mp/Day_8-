import React, { useState } from "react";

export default function EmployeeForm() {
  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    location: "",
    salary: ""
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Employee Added: ${employee.name}`);
  };

  return (
    <div className="container mt-4">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation:</label>
          <input type="text" className="form-control" name="designation" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Location:</label>
          <input type="text" className="form-control" name="location" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary:</label>
          <input type="number" className="form-control" name="salary" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
