import React, { Component } from 'react'

export default class ShowEmployees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@company.com',
          department: 'IT',
          position: 'Software Engineer',
          salary: 75000,
          joinDate: '2022-01-15',
          phone: '+1-555-0101',
          status: 'Active'
        },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@company.com',
          department: 'HR',
          position: 'HR Manager',
          salary: 80000,
          joinDate: '2021-03-10',
          phone: '+1-555-0102',
          status: 'Active'
        },
        {
          id: 3,
          firstName: 'Mike',
          lastName: 'Johnson',
          email: 'mike.johnson@company.com',
          department: 'Finance',
          position: 'Financial Analyst',
          salary: 65000,
          joinDate: '2022-06-20',
          phone: '+1-555-0103',
          status: 'Active'
        },
        {
          id: 4,
          firstName: 'Sarah',
          lastName: 'Williams',
          email: 'sarah.williams@company.com',
          department: 'Marketing',
          position: 'Marketing Specialist',
          salary: 60000,
          joinDate: '2021-11-05',
          phone: '+1-555-0104',
          status: 'Active'
        },
        {
          id: 5,
          firstName: 'David',
          lastName: 'Brown',
          email: 'david.brown@company.com',
          department: 'IT',
          position: 'DevOps Engineer',
          salary: 85000,
          joinDate: '2020-09-12',
          phone: '+1-555-0105',
          status: 'Active'
        },
        {
          id: 6,
          firstName: 'Emily',
          lastName: 'Davis',
          email: 'emily.davis@company.com',
          department: 'Marketing',
          position: 'Marketing Manager',
          salary: 90000,
          joinDate: '2019-08-20',
          phone: '+1-555-0106',
          status: 'Active'
        },
        {
          id: 7,
          firstName: 'Robert',
          lastName: 'Wilson',
          email: 'robert.wilson@company.com',
          department: 'Finance',
          position: 'Senior Accountant',
          salary: 70000,
          joinDate: '2021-12-01',
          phone: '+1-555-0107',
          status: 'On Leave'
        }
      ],
      searchTerm: '',
      sortBy: 'firstName',
      sortOrder: 'asc',
      showAddModal: false,
      showEditModal: false,
      editingEmployee: null,
      newEmployee: {
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        position: '',
        salary: '',
        joinDate: '',
        phone: '',
        status: 'Active'
      },
      departments: ['IT', 'HR', 'Finance', 'Marketing', 'Operations', 'Sales'],
      filterDepartment: 'All',
      filterStatus: 'All',
      currentPage: 1,
      employeesPerPage: 5
    }
  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value,
      currentPage: 1
    })
  }

  handleDepartmentFilter = (e) => {
    this.setState({
      filterDepartment: e.target.value,
      currentPage: 1
    })
  }

  handleStatusFilter = (e) => {
    this.setState({
      filterStatus: e.target.value,
      currentPage: 1
    })
  }

  handleSort = (field) => {
    const { sortBy, sortOrder } = this.state
    const newSortOrder = sortBy === field && sortOrder === 'asc' ? 'desc' : 'asc'
    
    this.setState({
      sortBy: field,
      sortOrder: newSortOrder
    })
  }

  getFilteredAndSortedEmployees = () => {
    const { employees, searchTerm, sortBy, sortOrder, filterDepartment, filterStatus } = this.state
    
    // Filter employees based on search term, department, and status
    let filteredEmployees = employees.filter(employee => {
      const matchesSearch = 
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.phone.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesDepartment = filterDepartment === 'All' || employee.department === filterDepartment
      const matchesStatus = filterStatus === 'All' || employee.status === filterStatus
      
      return matchesSearch && matchesDepartment && matchesStatus
    })
    
    // Sort employees
    filteredEmployees.sort((a, b) => {
      let aValue = a[sortBy]
      let bValue = b[sortBy]
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase()
        bValue = bValue.toLowerCase()
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
      }
    })
    
    return filteredEmployees
  }

  // Pagination
  getCurrentPageEmployees = () => {
    const filteredEmployees = this.getFilteredAndSortedEmployees()
    const { currentPage, employeesPerPage } = this.state
    const startIndex = (currentPage - 1) * employeesPerPage
    const endIndex = startIndex + employeesPerPage
    return filteredEmployees.slice(startIndex, endIndex)
  }

  getTotalPages = () => {
    const filteredEmployees = this.getFilteredAndSortedEmployees()
    return Math.ceil(filteredEmployees.length / this.state.employeesPerPage)
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page })
  }

  // CRUD Operations
  deleteEmployee = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      this.setState({
        employees: this.state.employees.filter(emp => emp.id !== id)
      })
    }
  }

  showAddModal = () => {
    this.setState({ 
      showAddModal: true,
      newEmployee: {
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        position: '',
        salary: '',
        joinDate: '',
        phone: '',
        status: 'Active'
      }
    })
  }

  hideAddModal = () => {
    this.setState({ showAddModal: false })
  }

  showEditModal = (employee) => {
    this.setState({ 
      showEditModal: true,
      editingEmployee: { ...employee }
    })
  }

  hideEditModal = () => {
    this.setState({ showEditModal: false, editingEmployee: null })
  }

  handleNewEmployeeChange = (e) => {
    this.setState({
      newEmployee: {
        ...this.state.newEmployee,
        [e.target.name]: e.target.value
      }
    })
  }

  handleEditEmployeeChange = (e) => {
    this.setState({
      editingEmployee: {
        ...this.state.editingEmployee,
        [e.target.name]: e.target.value
      }
    })
  }

  addEmployee = (e) => {
    e.preventDefault()
    const { newEmployee, employees } = this.state
    
    // Simple validation
    if (!newEmployee.firstName || !newEmployee.lastName || !newEmployee.email) {
      alert('Please fill in all required fields')
      return
    }
    
    // Fix for empty array case and ensure proper ID generation
    const nextId = employees.length > 0 
      ? Math.max(...employees.map(emp => emp.id)) + 1 
      : 1
    
    const employee = {
      ...newEmployee,
      id: nextId,
      salary: parseFloat(newEmployee.salary) || 0,
      // Ensure required fields have default values if empty
      department: newEmployee.department || 'Not Assigned',
      position: newEmployee.position || 'Not Assigned',
      phone: newEmployee.phone || 'Not Provided',
      joinDate: newEmployee.joinDate || new Date().toISOString().split('T')[0]
    }
    
    this.setState({
      employees: [...employees, employee],
      showAddModal: false
    })
  }

  updateEmployee = (e) => {
    e.preventDefault()
    const { editingEmployee, employees } = this.state
    
    // Simple validation
    if (!editingEmployee.firstName || !editingEmployee.lastName || !editingEmployee.email) {
      alert('Please fill in all required fields')
      return
    }
    
    const updatedEmployees = employees.map(emp => 
      emp.id === editingEmployee.id 
        ? { ...editingEmployee, salary: parseFloat(editingEmployee.salary) || 0 }
        : emp
    )
    
    this.setState({
      employees: updatedEmployees,
      showEditModal: false,
      editingEmployee: null
    })
  }
  
  render() {
    const { 
      searchTerm, 
      sortBy, 
      sortOrder, 
      showAddModal, 
      showEditModal, 
      newEmployee, 
      editingEmployee, 
      departments,
      filterDepartment,
      filterStatus,
      currentPage
      // employeesPerPage - removed unused variable
    } = this.state
    
    const filteredEmployees = this.getFilteredAndSortedEmployees()
    const currentPageEmployees = this.getCurrentPageEmployees()
    const totalPages = this.getTotalPages()
    
    return (
      <div className="employees-container">
        <div className="employees-header">
          <h2>Employee Management</h2>
          <button onClick={this.showAddModal} className="btn-primary">
            + Add New Employee
          </button>
        </div>

        <div className="employees-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={this.handleSearch}
              className="search-input"
            />
          </div>
          
          <div className="filters-container">
            <select 
              value={filterDepartment} 
              onChange={this.handleDepartmentFilter}
              className="filter-select"
            >
              <option value="All">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            
            <select 
              value={filterStatus} 
              onChange={this.handleStatusFilter}
              className="filter-select"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="On Leave">On Leave</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div className="employees-stats">
          <div className="stat-card">
            <h3>{this.state.employees.length}</h3>
            <p>Total Employees</p>
          </div>
          <div className="stat-card">
            <h3>{new Set(this.state.employees.map(emp => emp.department)).size}</h3>
            <p>Departments</p>
          </div>
          <div className="stat-card">
            <h3>{filteredEmployees.length}</h3>
            <p>Filtered Results</p>
          </div>
          <div className="stat-card">
            <h3>{this.state.employees.filter(emp => emp.status === 'Active').length}</h3>
            <p>Active Employees</p>
          </div>
        </div>

        <div className="table-container">
          <table className="employees-table">
            <thead>
              <tr>
                <th onClick={() => this.handleSort('firstName')} className="sortable">
                  First Name {sortBy === 'firstName' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => this.handleSort('lastName')} className="sortable">
                  Last Name {sortBy === 'lastName' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => this.handleSort('email')} className="sortable">
                  Email {sortBy === 'email' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => this.handleSort('department')} className="sortable">
                  Department {sortBy === 'department' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => this.handleSort('position')} className="sortable">
                  Position {sortBy === 'position' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => this.handleSort('salary')} className="sortable">
                  Salary {sortBy === 'salary' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => this.handleSort('phone')} className="sortable">
                  Phone {sortBy === 'phone' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => this.handleSort('status')} className="sortable">
                  Status {sortBy === 'status' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPageEmployees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>
                    <span className={`department-badge ${employee.department.toLowerCase()}`}>
                      {employee.department}
                    </span>
                  </td>
                  <td>{employee.position}</td>
                  <td>${employee.salary.toLocaleString()}</td>
                  <td>{employee.phone}</td>
                  <td>
                    <span className={`status-badge ${employee.status.toLowerCase().replace(' ', '-')}`}>
                      {employee.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn-edit"
                        onClick={() => this.showEditModal(employee)}
                        title="Edit Employee"
                      >
                        ✏️
                      </button>
                      <button 
                        className="btn-delete"
                        onClick={() => this.deleteEmployee(employee.id)}
                        title="Delete Employee"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredEmployees.length === 0 && (
            <div className="no-results">
              <p>No employees found matching your search criteria.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button 
              className="pagination-btn"
              onClick={() => this.handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => this.handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            
            <button 
              className="pagination-btn"
              onClick={() => this.handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}

        {/* Add Employee Modal */}
        {showAddModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Add New Employee</h3>
                <button className="modal-close" onClick={this.hideAddModal}>&times;</button>
              </div>
              <form onSubmit={this.addEmployee} className="employee-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={newEmployee.firstName}
                      onChange={this.handleNewEmployeeChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={newEmployee.lastName}
                      onChange={this.handleNewEmployeeChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={newEmployee.email}
                      onChange={this.handleNewEmployeeChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={newEmployee.phone}
                      onChange={this.handleNewEmployeeChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Department</label>
                    <select
                      name="department"
                      value={newEmployee.department}
                      onChange={this.handleNewEmployeeChange}
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Position</label>
                    <input
                      type="text"
                      name="position"
                      value={newEmployee.position}
                      onChange={this.handleNewEmployeeChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Salary</label>
                    <input
                      type="number"
                      name="salary"
                      value={newEmployee.salary}
                      onChange={this.handleNewEmployeeChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Join Date</label>
                    <input
                      type="date"
                      name="joinDate"
                      value={newEmployee.joinDate}
                      onChange={this.handleNewEmployeeChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Status</label>
                    <select
                      name="status"
                      value={newEmployee.status}
                      onChange={this.handleNewEmployeeChange}
                    >
                      <option value="Active">Active</option>
                      <option value="On Leave">On Leave</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={this.hideAddModal}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    Add Employee
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit Employee Modal */}
        {showEditModal && editingEmployee && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Edit Employee</h3>
                <button className="modal-close" onClick={this.hideEditModal}>&times;</button>
              </div>
              <form onSubmit={this.updateEmployee} className="employee-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={editingEmployee.firstName}
                      onChange={this.handleEditEmployeeChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={editingEmployee.lastName}
                      onChange={this.handleEditEmployeeChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={editingEmployee.email}
                      onChange={this.handleEditEmployeeChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={editingEmployee.phone}
                      onChange={this.handleEditEmployeeChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Department</label>
                    <select
                      name="department"
                      value={editingEmployee.department}
                      onChange={this.handleEditEmployeeChange}
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Position</label>
                    <input
                      type="text"
                      name="position"
                      value={editingEmployee.position}
                      onChange={this.handleEditEmployeeChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Salary</label>
                    <input
                      type="number"
                      name="salary"
                      value={editingEmployee.salary}
                      onChange={this.handleEditEmployeeChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Join Date</label>
                    <input
                      type="date"
                      name="joinDate"
                      value={editingEmployee.joinDate}
                      onChange={this.handleEditEmployeeChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Status</label>
                    <select
                      name="status"
                      value={editingEmployee.status}
                      onChange={this.handleEditEmployeeChange}
                    >
                      <option value="Active">Active</option>
                      <option value="On Leave">On Leave</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={this.hideEditModal}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    Update Employee
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    )
  }
}
