import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Faq = () => {
    return (
   <>
   <header>
           <div className="contact-info">
             <span>CONTACT - 79666 8310</span>
             <span>MAIL - care@anekcreation.com</span>
           </div>
           <div className="navbar">
             <Link to="/" className="logo">
               <img className="logo_image" src="/images/anek logo.jpg" alt="logo" />
               Anek Creations
             </Link>
             <div className="search-bar">
               <input type="text" placeholder="Search Products" />
               <button>🔍</button>
             </div>
             <div className="icons">
                           <span>
                 <Link to="/favourite">❤ Wishlist</Link>
               </span>
                           <span>
                 <Link to="/cart">🛒 Cart</Link>
               </span>
               <span>
                 <Link to="/login">👤 Profile</Link>
               </span>
             </div>
           </div>
         </header>
   
         <div className="privacy-policy-container">
      <h1>Anek Creations - Privacy Policy</h1>
      <p>This Privacy Policy describes how Anek Creations collects, uses, and shares your personal information...</p>
      {/* Add your detailed privacy policy content here */}
      <h2>Information We Collect</h2>
      <ul>
        <li>Account Information (name, email, password)</li>
        <li>Order Information (products purchased, shipping address, billing address)</li>
        <li>Browsing Information (IP address, device type, pages visited)</li>
        {/* ... more details ... */}
      </ul>
      <h2>How We Use Your Information</h2>
      <p>We use your information to process orders, personalize your experience, and communicate with you...</p>
      {/* ... more details ... */}
      <h2>Data Security</h2>
      <p>We take reasonable measures to protect your personal information...</p>
      {/* ... more details ... */}
      {/* Add more sections as needed */}
      
    </div>
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
export default Faq;