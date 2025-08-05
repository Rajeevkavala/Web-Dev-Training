import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>
          {isAuthenticated() 
            ? `Welcome back, ${user?.firstName}!` 
            : 'Welcome to Employee Management System'
          }
        </h1>
        <p className="hero-subtitle">
          {isAuthenticated() 
            ? 'Manage your workforce efficiently and effectively' 
            : 'Your complete solution for workforce management'
          }
        </p>
        
        {!isAuthenticated() && (
          <div className="cta-buttons">
            <Link to="/login" className="btn-primary">Get Started</Link>
            <Link to="/register" className="btn-secondary">Sign Up</Link>
          </div>
        )}
      </div>
      
      {isAuthenticated() ? (
        <div className="dashboard-section">
          <h2>Quick Actions</h2>
          <div className="quick-actions-grid">
            <Link to="/showemps" className="action-card">
              <div className="action-icon">👥</div>
              <h3>View Employees</h3>
              <p>Browse all employee records</p>
            </Link>
            <Link to="/products" className="action-card">
              <div className="action-icon">📦</div>
              <h3>Products</h3>
              <p>Manage product inventory</p>
            </Link>
            <Link to="/profile" className="action-card">
              <div className="action-icon">👤</div>
              <h3>My Profile</h3>
              <p>View and edit your profile</p>
            </Link>
            {user?.role === 'admin' && (
              <div className="action-card">
                <div className="action-icon">⚙️</div>
                <h3>Admin Panel</h3>
                <p>System administration</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="features-section">
          <h2>Our Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>👥 Employee Management</h3>
              <p>View and manage all employee information in one place</p>
            </div>
            <div className="feature-card">
              <h3>🔐 Secure Login</h3>
              <p>Secure authentication system for authorized access</p>
            </div>
            <div className="feature-card">
              <h3>📊 Product Catalog</h3>
              <p>Browse and manage product inventory</p>
            </div>
            <div className="feature-card">
              <h3>👤 User Registration</h3>
              <p>Easy registration process for new users</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="stats-section">
        <div className="stat-item">
          <h3>500+</h3>
          <p>Employees</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Departments</p>
        </div>
        <div className="stat-item">
          <h3>1000+</h3>
          <p>Products</p>
        </div>
        <div className="stat-item">
          <h3>99.9%</h3>
          <p>Uptime</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

