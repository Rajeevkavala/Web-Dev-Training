import React, { Component } from "react";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      error: null,
      searchTerm: "",
      selectedCategory: "All",
      sortBy: "name",
      sortOrder: "asc",
      currentPage: 1,
      productsPerPage: 8,
      showAddModal: false,
      showEditModal: false,
      editingProduct: null,
      newProduct: {
        name: '',
        category: '',
        price: '',
        stock: '',
        description: '',
        image: ''
      }
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      this.setState({ loading: true, error: null });
      
      // Using FakeStore API for demonstration
      const response = await fetch('https://fakestoreapi.com/products');
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      
      // Transform API data to match our component structure
      const transformedProducts = data.map(product => ({
        id: product.id,
        name: product.title,
        category: this.capitalizeFirst(product.category),
        price: product.price,
        stock: Math.floor(Math.random() * 200) + 10, // Random stock since API doesn't provide it
        description: product.description,
        image: product.image,
        rating: product.rating
      }));

      this.setState({ 
        products: transformedProducts, 
        loading: false 
      });
    } catch (error) {
      console.error('Error fetching products:', error);
      this.setState({ 
        error: error.message, 
        loading: false 
      });
    }
  };

  capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value,
      currentPage: 1
    });
  };

  handleCategoryChange = (e) => {
    this.setState({
      selectedCategory: e.target.value,
      currentPage: 1
    });
  };

  handleSort = (field) => {
    const { sortBy, sortOrder } = this.state;
    const newSortOrder = sortBy === field && sortOrder === "asc" ? "desc" : "asc";

    this.setState({
      sortBy: field,
      sortOrder: newSortOrder,
    });
  };

  getFilteredAndSortedProducts = () => {
    const { products, searchTerm, selectedCategory, sortBy, sortOrder } = this.state;

    // Filter products based on search term and category
    let filteredProducts = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filteredProducts.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];

      if (typeof aValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filteredProducts;
  };

  getCurrentPageProducts = () => {
    const filteredProducts = this.getFilteredAndSortedProducts();
    const { currentPage, productsPerPage } = this.state;
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  getTotalPages = () => {
    const filteredProducts = this.getFilteredAndSortedProducts();
    return Math.ceil(filteredProducts.length / this.state.productsPerPage);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  // CRUD Operations
  showAddModal = () => {
    this.setState({ 
      showAddModal: true,
      newProduct: {
        name: '',
        category: '',
        price: '',
        stock: '',
        description: '',
        image: ''
      }
    });
  };

  hideAddModal = () => {
    this.setState({ showAddModal: false });
  };

  showEditModal = (product) => {
    this.setState({ 
      showEditModal: true,
      editingProduct: { ...product }
    });
  };

  hideEditModal = () => {
    this.setState({ showEditModal: false, editingProduct: null });
  };

  handleNewProductChange = (e) => {
    this.setState({
      newProduct: {
        ...this.state.newProduct,
        [e.target.name]: e.target.value
      }
    });
  };

  handleEditProductChange = (e) => {
    this.setState({
      editingProduct: {
        ...this.state.editingProduct,
        [e.target.name]: e.target.value
      }
    });
  };

  addProduct = (e) => {
    e.preventDefault();
    const { newProduct, products } = this.state;
    
    // Simple validation
    if (!newProduct.name || !newProduct.category || !newProduct.price) {
      alert('Please fill in all required fields');
      return;
    }
    
    const product = {
      ...newProduct,
      id: Math.max(...products.map(p => p.id), 0) + 1,
      price: parseFloat(newProduct.price) || 0,
      stock: parseInt(newProduct.stock) || 0,
      rating: { rate: 0, count: 0 }
    };
    
    this.setState({
      products: [...products, product],
      showAddModal: false
    });
  };

  updateProduct = (e) => {
    e.preventDefault();
    const { editingProduct, products } = this.state;
    
    // Simple validation
    if (!editingProduct.name || !editingProduct.category || !editingProduct.price) {
      alert('Please fill in all required fields');
      return;
    }
    
    const updatedProducts = products.map(p => 
      p.id === editingProduct.id 
        ? { 
            ...editingProduct, 
            price: parseFloat(editingProduct.price) || 0,
            stock: parseInt(editingProduct.stock) || 0
          }
        : p
    );
    
    this.setState({
      products: updatedProducts,
      showEditModal: false,
      editingProduct: null
    });
  };

  deleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      this.setState({
        products: this.state.products.filter(p => p.id !== id)
      });
    }
  };

  getCategories = () => {
    const categories = [...new Set(this.state.products.map(product => product.category))];
    return categories.sort();
  };

  render() {
    const { 
      products, 
      loading, 
      error, 
      searchTerm, 
      selectedCategory, 
      sortBy, 
      sortOrder, 
      currentPage,
      showAddModal,
      showEditModal,
      newProduct,
      editingProduct
    } = this.state;

    if (loading) {
      return (
        <div className="products-container">
          <div className="loading-container">
            <h2>Loading Products</h2>
            <div className="spinner"></div>
            <div className="progress-bar">
              <div className="progress" style={{width: '70%', animation: 'loading-progress 2s ease-in-out infinite'}}></div>
            </div>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="products-container">
          <div className="error-container">
            <div className="error-icon">❌</div>
            <h3>Error Loading Products</h3>
            <p>{error}</p>
            <button onClick={this.fetchProducts} className="btn-primary pulse-effect">
              Try Again
            </button>
          </div>
        </div>
      );
    }

    const filteredProducts = this.getFilteredAndSortedProducts();
    const currentPageProducts = this.getCurrentPageProducts();
    const totalPages = this.getTotalPages();
    const categories = this.getCategories();

    return (
      <div className="products-container">
        <div className="products-header">
          <h2>Product Management</h2>
          <button onClick={this.showAddModal} className="btn-primary">
            + Add New Product
          </button>
        </div>

        <div className="products-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={this.handleSearch}
              className="search-input"
            />
          </div>

          <div className="filters-container">
            <select
              value={selectedCategory}
              onChange={this.handleCategoryChange}
              className="filter-select"
            >
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => this.handleSort(e.target.value)}
              className="filter-select"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="stock">Sort by Stock</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
        </div>

        <div className="products-stats">
          <div className="stat-card">
            <h3>{products.length}</h3>
            <p>Total Products</p>
          </div>
          <div className="stat-card">
            <h3>{categories.length}</h3>
            <p>Categories</p>
          </div>
          <div className="stat-card">
            <h3>{filteredProducts.length}</h3>
            <p>Filtered Results</p>
          </div>
          <div className="stat-card">
            <h3>{products.filter(p => p.stock < 20).length}</h3>
            <p>Low Stock Items</p>
          </div>
        </div>

        <div className="products-grid">
          {currentPageProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img 
                  src={product.image || '/api/placeholder/200/200'} 
                  alt={product.name}
                  onError={(e) => {
                    e.target.src = '/api/placeholder/200/200';
                  }}
                />
                <div className="product-overlay">
                  <button 
                    className="btn-edit"
                    onClick={() => this.showEditModal(product)}
                    title="Edit Product"
                  >
                    ✏️
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => this.deleteProduct(product.id)}
                    title="Delete Product"
                  >
                    🗑️
                  </button>
                </div>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-category">{product.category}</span>
                <p className="product-description">
                  {product.description.length > 100 
                    ? product.description.substring(0, 100) + "..." 
                    : product.description}
                </p>
                
                <div className="product-details">
                  <div className="product-price">
                    <span className="price">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="product-stock">
                    <span className={`stock ${product.stock < 20 ? 'low' : ''}`}>
                      Stock: {product.stock}
                    </span>
                  </div>
                </div>
                
                {product.rating && (
                  <div className="product-rating">
                    <span className="rating">
                      ⭐ {product.rating.rate ? product.rating.rate.toFixed(1) : 'N/A'}
                    </span>
                    <span className="reviews">
                      ({product.rating.count || 0} reviews)
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-results">
            <p>No products found matching your search criteria.</p>
          </div>
        )}

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

        {/* Add Product Modal */}
        {showAddModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Add New Product</h3>
                <button className="modal-close" onClick={this.hideAddModal}>&times;</button>
              </div>
              <form onSubmit={this.addProduct} className="product-form">
                <div className="form-group">
                  <label>Product Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={newProduct.name}
                    onChange={this.handleNewProductChange}
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Category *</label>
                    <select
                      name="category"
                      value={newProduct.category}
                      onChange={this.handleNewProductChange}
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                      <option value="Electronics">Electronics</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Books">Books</option>
                      <option value="Home">Home</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Price *</label>
                    <input
                      type="number"
                      name="price"
                      step="0.01"
                      value={newProduct.price}
                      onChange={this.handleNewProductChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Stock Quantity</label>
                    <input
                      type="number"
                      name="stock"
                      value={newProduct.stock}
                      onChange={this.handleNewProductChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="url"
                      name="image"
                      value={newProduct.image}
                      onChange={this.handleNewProductChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    name="description"
                    value={newProduct.description}
                    onChange={this.handleNewProductChange}
                    rows="3"
                  />
                </div>
                
                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={this.hideAddModal}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit Product Modal */}
        {showEditModal && editingProduct && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Edit Product</h3>
                <button className="modal-close" onClick={this.hideEditModal}>&times;</button>
              </div>
              <form onSubmit={this.updateProduct} className="product-form">
                <div className="form-group">
                  <label>Product Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={editingProduct.name}
                    onChange={this.handleEditProductChange}
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Category *</label>
                    <select
                      name="category"
                      value={editingProduct.category}
                      onChange={this.handleEditProductChange}
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                      <option value="Electronics">Electronics</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Books">Books</option>
                      <option value="Home">Home</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Price *</label>
                    <input
                      type="number"
                      name="price"
                      step="0.01"
                      value={editingProduct.price}
                      onChange={this.handleEditProductChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Stock Quantity</label>
                    <input
                      type="number"
                      name="stock"
                      value={editingProduct.stock}
                      onChange={this.handleEditProductChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="url"
                      name="image"
                      value={editingProduct.image}
                      onChange={this.handleEditProductChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    name="description"
                    value={editingProduct.description}
                    onChange={this.handleEditProductChange}
                    rows="3"
                  />
                </div>
                
                <div className="form-actions">
                  <button type="button" className="btn-secondary" onClick={this.hideEditModal}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary">
                    Update Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
