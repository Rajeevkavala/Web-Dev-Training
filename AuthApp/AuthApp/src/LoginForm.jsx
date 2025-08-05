import React, { useState } from "react";

const LoginForm = ({ onLogin, switchForm }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.email.includes("@")) errs.email = "Invalid email";
    if (form.password.length < 6) errs.password = "Minimum 6 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onLogin(form);
      setForm({ email: "", password: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2 className="form-title">Welcome Back</h2>
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
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="form-input"
        />
        {errors.password && <div className="error-message">{errors.password}</div>}
      </div>
      <button type="submit" className="btn-primary">Sign In</button>
      <div className="switch-form">
        <p>
          Don't have an account? <button type="button" onClick={switchForm} className="btn-secondary">Create Account</button>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
