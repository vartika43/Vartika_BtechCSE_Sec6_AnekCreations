import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Confirmorder = () => {
  return (
    <>
      {/* Navbar */}
      <header>
        <div className="contact-info">
          <span>CONTACT - 79666 8310</span>
          <span>MAIL - care@anekcreation.com</span>
        </div>
        <div className="navbar">
          <Link to="/" className="logo">
            <img className="logo_image" src="/images/anek logo.jpg" alt="Anek Creations Logo" />
            Anek Creations
          </Link>

          <div className="icons">
            <span><Link to="/favourite">❤ Wishlist</Link></span>
            <span><Link to="/cart">🛒 Cart</Link></span>
            <span><Link to="/login">👤 Profile</Link></span>
          </div>
        </div>
      </header>

      {/* Confirm Message */}
      <div className="order-confirmation">
        <h1>🎉 Your Order is Confirmed!</h1>
        <p>Thank you for shopping with Anek Creations.</p>
        <p>We'll share the tracking details as soon as your order is dispatched</p>
        <Link to="/">
          <button className="shop-btn">Go to Home</button>
        </Link>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-columns">
          <div>
            <h3>Contact</h3>
            <p>Phone: 796668310</p>
            <p>Email: care@anekcreation.com</p>
            <Link to="https://www.instagram.com/anek.creations?igsh=M2xtcGpkenEydDdz" target="_blank" rel="noopener noreferrer"><p>Instagram</p></Link>
          </div>
          <div>
            <h3>Categories</h3>
            <Link to="/all"><p>All Products</p></Link>
            <Link to="/resin"><p>Resin Art</p></Link>
            <Link to="/crochet"><p>Crochet Art</p></Link>
            <Link to="/weddingEssential"><p>Jewellery</p></Link>
          </div>
          <div>
            <h3>Information</h3>
            <Link to="/aboutus"><p>About Us</p></Link>
            <Link to="/terms"><p>Terms & Conditions</p></Link>
            <Link to="/privacy"><p>Privacy & Policy</p></Link>
          </div>
          <div>
            <h3>Quick Links</h3>
            <p>My Account</p>
            <Link to="/faq"><p>Questions?</p></Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Anek Creations. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Confirmorder;
