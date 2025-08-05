import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const history = useHistory();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/home';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const validationErrors = {};
    const { username, password } = formData;
    
    if (!username.trim()) {
      validationErrors.username = 'Username is required';
    }

    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setErrors({});
      
      const result = await login(formData.username, formData.password);
      
      if (result.success) {
        history.replace(from);
      } else {
        setErrors({ general: result.error });
      }
      
      setLoading(false);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to Your Account</h2>
        
        {errors.general && (
          <div className="error-banner">
            {errors.general}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={errors.username ? 'error' : ''}
              placeholder="Enter your username"
              disabled={loading}
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              placeholder="Enter your password"
              disabled={loading}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <button 
            type="submit" 
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="demo-credentials">
          <p><strong>Demo Credentials:</strong></p>
          <p>Admin: username: <code>admin</code>, password: <code>admin123</code></p>
          <p>User: username: <code>user1</code>, password: <code>password123</code></p>
        </div>
        
        <div className="login-footer">
          <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
