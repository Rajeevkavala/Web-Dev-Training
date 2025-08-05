import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const UserProfile = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user || {});
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedUser({ ...user });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser({ ...user });
  };

  const handleSave = () => {
    // In a real app, this would update the user in the backend
    console.log('Updated user:', editedUser);
    setIsEditing(false);
    // Here you would typically call an API to update the user
  };

  const handleInputChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value
    });
  };

  if (!user) {
    return (
      <div className="profile-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header-section">
        <div className="profile-banner">
          <div className="profile-avatar-large">
            <span>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</span>
          </div>
          <div className="profile-info-header">
            <h1>{user.firstName} {user.lastName}</h1>
            <p className="user-title">{user.role === 'admin' ? 'System Administrator' : 'Employee'}</p>
            <span className={`user-role-badge ${user.role}`}>{user.role}</span>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile Info
        </button>
        <button 
          className={`tab-btn ${activeTab === 'activity' ? 'active' : ''}`}
          onClick={() => setActiveTab('activity')}
        >
          Activity
        </button>
        <button 
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      <div className="profile-content">
        {activeTab === 'profile' && (
          <div className="profile-tab-content">
            <div className="profile-card">
              <div className="card-header">
                <h3>Personal Information</h3>
                {!isEditing ? (
                  <button onClick={handleEdit} className="btn-primary">
                    Edit Profile
                  </button>
                ) : (
                  <div className="edit-actions">
                    <button onClick={handleSave} className="btn-success">
                      Save
                    </button>
                    <button onClick={handleCancel} className="btn-secondary">
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              
              <div className="profile-form">
                <div className="form-row">
                  <div className="info-group">
                    <label>First Name:</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="firstName"
                        value={editedUser.firstName}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{user.firstName}</span>
                    )}
                  </div>
                  
                  <div className="info-group">
                    <label>Last Name:</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="lastName"
                        value={editedUser.lastName}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{user.lastName}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="info-group">
                    <label>Username:</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="username"
                        value={editedUser.username}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{user.username}</span>
                    )}
                  </div>
                  
                  <div className="info-group">
                    <label>Email:</label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={editedUser.email}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <span>{user.email}</span>
                    )}
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="info-group">
                    <label>User ID:</label>
                    <span>{user.id}</span>
                  </div>
                  
                  <div className="info-group">
                    <label>Role:</label>
                    <span className={`role-badge ${user.role}`}>{user.role}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="profile-stats-card">
              <h3>Account Statistics</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon">📋</div>
                  <span className="stat-number">12</span>
                  <span className="stat-label">Projects Assigned</span>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">✅</div>
                  <span className="stat-number">8</span>
                  <span className="stat-label">Completed Tasks</span>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">⏳</div>
                  <span className="stat-number">4</span>
                  <span className="stat-label">Pending Tasks</span>
                </div>
                <div className="stat-item">
                  <div className="stat-icon">📈</div>
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Performance</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="profile-tab-content">
            <div className="activity-card">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">🔐</div>
                  <div className="activity-content">
                    <p><strong>Logged in</strong></p>
                    <span className="activity-time">2 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">📝</div>
                  <div className="activity-content">
                    <p><strong>Updated profile information</strong></p>
                    <span className="activity-time">1 day ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">👥</div>
                  <div className="activity-content">
                    <p><strong>Viewed employee records</strong></p>
                    <span className="activity-time">2 days ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">📦</div>
                  <div className="activity-content">
                    <p><strong>Accessed product catalog</strong></p>
                    <span className="activity-time">3 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="profile-tab-content">
            <div className="settings-card">
              <h3>Account Settings</h3>
              <div className="settings-list">
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Email Notifications</h4>
                    <p>Receive email updates about system changes</p>
                  </div>
                  <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider"></span>
                  </label>
                </div>
                
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Two-Factor Authentication</h4>
                    <p>Add an extra layer of security to your account</p>
                  </div>
                  <button className="btn-primary">Enable</button>
                </div>
                
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Change Password</h4>
                    <p>Update your account password</p>
                  </div>
                  <button className="btn-secondary">Change</button>
                </div>
                
                <div className="setting-item">
                  <div className="setting-info">
                    <h4>Data Export</h4>
                    <p>Download your account data</p>
                  </div>
                  <button className="btn-secondary">Export</button>
                </div>
                
                <div className="setting-item danger">
                  <div className="setting-info">
                    <h4>Logout</h4>
                    <p>Sign out of your account</p>
                  </div>
                  <button className="btn-danger" onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;