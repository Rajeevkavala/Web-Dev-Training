import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children, requireRole, ...rest }) => {
  const { isAuthenticated, hasRole, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!isAuthenticated()) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          );
        }

        if (requireRole && !hasRole(requireRole)) {
          return (
            <div className="access-denied">
              <h2>Access Denied</h2>
              <p>You don't have permission to access this page.</p>
            </div>
          );
        }

        return children;
      }}
    />
  );
};

export default ProtectedRoute;