import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  const handleRegister = (user) => {
    const exists = users.find((u) => u.email === user.email);
    if (exists) {
      alert("User already exists!");
    } else {
      setUsers([...users, user]);
      alert("Registration successful! Please login.");
      setShowLogin(true);
    }
  };

  const handleLogin = (credentials) => {
    const matched = users.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );
    if (matched) {
      alert(`Welcome back, ${matched.name}!`);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <h1 className="app-title">🧑‍💻 Auth System</h1>
        {showLogin ? (
          <LoginForm onLogin={handleLogin} switchForm={() => setShowLogin(false)} />
        ) : (
          <RegisterForm onRegister={handleRegister} switchForm={() => setShowLogin(true)} />
        )}
      </div>
    </div>
  );
};

export default App;
