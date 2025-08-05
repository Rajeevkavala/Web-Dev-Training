import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import { AuthProvider, useAuth } from './AuthContext'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import ShowEmployees from './ShowEmployees'
import Products from './Products'
import UserProfile from './UserProfile'
import ProtectedRoute from './ProtectedRoute'

const Navigation = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>Employee Management System</h2>
      </div>
      <div className="nav-links">
        <NavLink to='/home' activeClassName="active">🏠 Home</NavLink>
        
        {!isAuthenticated() ? (
          <>
            <NavLink to='/login' activeClassName="active">🔐 Login</NavLink>
            <NavLink to='/register' activeClassName="active">👤 Register</NavLink>
          </>
        ) : (
          <>
            <NavLink to='/showemps' activeClassName="active">👥 Employees</NavLink>
            <NavLink to='/products' activeClassName="active">📦 Products</NavLink>
            <NavLink to='/profile' activeClassName="active">👤 Profile</NavLink>
            <div className="user-info">
              <span>Welcome, {user?.firstName}!</span>
              <button onClick={handleLogout} className="btn-logout">Logout</button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

const Main = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="main-container">   
            <Navigation />
            
            <div className="welcome-banner">
              <div className="scrolling-text">
                <h1>🎉 Welcome to Employee Management System - Your One-Stop Solution for Workforce Management! 🎉</h1>
              </div>
            </div>
            
            <main className="main-content">
              <Switch>
                <Route path='/home' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <ProtectedRoute path='/showemps' component={ShowEmployees} />
                <ProtectedRoute path='/products' component={Products} />
                <ProtectedRoute path='/profile' component={UserProfile} />
                <Route path='/' component={Home} />
              </Switch>
            </main>
            
            <footer className="footer">
              <p>&copy; 2024 Employee Management System. All rights reserved.</p>
            </footer>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default Main;
