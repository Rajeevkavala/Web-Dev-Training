import React, { useState } from "react";

const RegisterForm = ({ onRegister, switchForm }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.includes("@")) errs.email = "Invalid email";
    if (form.password.length < 6) errs.password = "Minimum 6 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onRegister(form);
      setForm({ name: "", email: "", password: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2 className="form-title">Register</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="form-input"
        />
        {errors.name && <div className="error-message">{errors.name}</div>}
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="form-input"
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="form-input"
        />
        {errors.password && <div className="error-message">{errors.password}</div>}
      </div>
      <button type="submit" className="btn-primary">Create Account</button>
      <div className="switch-form">
        <p>
          Already have an account? <button type="button" onClick={switchForm} className="btn-secondary">Sign In</button>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
