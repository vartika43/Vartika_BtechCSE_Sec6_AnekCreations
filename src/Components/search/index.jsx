import React, { useState } from 'react';
import products from '../../data/all.json';
import './style.css';

const SearchItem = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (value) => {
    if (value && value.length > 2) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowDropdown(true);
    } else {
      setFilteredProducts([]);
      setShowDropdown(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    if (value.length > 2) {
      handleSearch(value);
    } else {
      setFilteredProducts([]);
      setShowDropdown(false);
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setSearchText('');
      setShowDropdown(false);
    }, 150);
  };

  return (
    <div className="search-container">
      <div className="search-box-wrapper">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onFocus={() => setShowDropdown(true)}
          className="search-input"
        />

        {showDropdown && filteredProducts.length > 0 && (
          <div className="search-dropdown">
            <ul className="dropdown-list">
              {filteredProducts.map(item => (
                <li key={item.id} className="search-dropdown-item">
                  <div className="item-meta">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="item-avatar"
                    />
                    <span className="item-title">{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
