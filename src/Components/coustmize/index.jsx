import React, { useState } from "react";
import { Link } from "react-router-dom"; // 🛠️ Import Link
import "./style.css";

const Customize = () => {
  const [customText, setCustomText] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // 🛠️ Add searchTerm state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customText.trim()) {
      alert(`Your idea submitted: "${customText}"`);
      setCustomText("");
    } else {
      alert("Please write about your customization idea first!");
    }
  
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // For now, just alert. You can integrate actual search functionality later.
      alert(`Searching for: "${searchTerm}"`);
      setSearchTerm("");
    }
  };

  return (
    <>
      {/* Header */}
      <header>
        <div className="contact-info">
          <span>CONTACT - 79666 8310</span>
          <span>MAIL - care@anekcreation.com</span>
          <Link to="https://www.instagram.com/anek.creations?igsh=M2xtcGpkenEydDdz" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={24} style={{ color: '#E1306C' }} />
    </Link>
        </div>
        <div className="navbar">
          <Link to="/" className="logo">
            <img className="logo_image" src="/images/anek logo.jpg" alt="logo" />
            Anek Creations
          </Link>
          <div className="icons">
            <Link to="/favourite">❤ Wishlist</Link>
            <Link to="/cart">🛒 Cart</Link>
            <Link to="/login">👤 Profile</Link>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="banner">
        <img src="/images/collage.png" alt="Customisation Banner" />
        <div className="overlay">
          <h2>OPEN FOR CUSTOMISATION</h2>
          <p>SCROLL DOWN TO UPLOAD YOUR IDEA AND HEAR FROM US SOON</p>

          <form onSubmit={handleSubmit} className="form-section">
            <input
              type="text"
              placeholder="Tell about your customisation here"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
            />
            <button type="submit" className="submit-button">
              Submit Idea
            </button>
          </form>

          <span className="highlight">
            OR DM US ON OUR INSTA PAGE BY CLICKING ON THE INSTAGRAM ICON
          </span>
        </div>
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
            <Link to="/faq"><p>My Account</p></Link>
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

export default Customize;
