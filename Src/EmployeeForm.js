import React, { useState } from "react";

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

export default EmployeeForm;
