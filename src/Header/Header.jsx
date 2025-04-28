import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PRODUCTS from "../data";
import logo from "../components/imgs/All1.jpg";
import { useSelector } from 'react-redux';

export function Header() {
  const cartItems = useSelector((state) => state?.cartItems || []);
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // 👈 للتحكم بظهور خانة البحث في الموبايل

  const lastScrollY = useRef(window.scrollY);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSearchResults([]);
    } else {
      const results = PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isHidden ? "hidden" : ""}`}>
      <div className="menu-container">
        <button className="menu-button" onClick={toggleMenu}>☰</button>
        {isOpen && (
          <div className="dropdown-menu">
            <Link to="/my-account">My Account</Link>
            <Link to="/Cart">My Cart</Link>
            <Link to="/my-favorites">My Favorites</Link>
          </div>
        )}
      </div>

      <div className={`search-bar ${isSearchOpen ? 'open' : ''}`}>
        <FontAwesomeIcon 
          icon={faSearch} 
          className="search-icon" 
          onClick={() => setIsSearchOpen(!isSearchOpen)} // 👈 يفتح ويغلق البحث
        />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => {
            if (searchTerm.trim() !== '') {
              const results = PRODUCTS.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
              setSearchResults(results);
            }
          }}
          onBlur={() => setTimeout(() => setSearchResults([]), 200)}
        />
        
        {searchTerm && (
          <div className="search-results">
            {searchResults.length > 0 ? (
              searchResults.map((product) => (
                <Link key={product.id} to={`/details/${product.id}`} className="search-result-item">
                  {product.name}
                </Link>
              ))
            ) : (
              <div className="no-results">No results found</div>
            )}
          </div>
        )}
      </div>

      <div className="center-section">
        <Link className="logo" to={'/'}>
          <img src={logo} alt="Logo" />
        </Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/accessories" className="nav-link">Accessories</Link>
          <Link to="/Laptop" className="nav-link">Laptop</Link>
          <Link to="/sale" className="nav-link">Sale</Link>
        </nav>
      </div>

      <div className="right-section">
        <Link to="/login" className="login-btn">
          <FontAwesomeIcon icon={faUser} className="user-icon" /> Login
        </Link>
        <div className="cart-icon-container">
          <Link to="/cart" className="cart-link">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
