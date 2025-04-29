import React, { useState } from 'react';
import "./style.css";
import { Link } from "react-router-dom";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused products in their original packaging."
    },
    {
      question: "How do I track my order?",
      answer: "After placing an order, you will receive an email with a tracking number and link."
    },
    {
      question: "Can I change my shipping address?",
      answer: "Yes! Contact our support team within 24 hours to update your shipping details."
    },
    {
      question: "Do you offer gift packaging?",
      answer: "Yes! We offer beautiful gift packaging options. You can select gift packaging during checkout or request it when placing a custom order."
    },
    {
      question: "Can I request a specific color, design, or theme?",
      answer: "Of course! Customization is at the heart of what we do. You can mention your preferences when placing a custom order, and we will create something specially tailored for you."
    },
    {
      question: "What materials do you use?",
      answer: `• Crochet products: We use premium quality yarns, eco-friendly and soft for all ages.
• Resin products: We use high-quality, non-toxic, and durable resin suitable for daily use and decor.`
    },
    {
      question: "How can I contact you for any questions?",
      answer: `You can reach us through:
• Contact Us page on our website
• Email: care@anekcreation.com
• Instagram DM: @anek_creation`
    }
  ];

  return (
    <>
      {/* Header */}
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

      {/* FAQ Section */}
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            <div
              className="faq-answer"
              style={{ maxHeight: activeIndex === index ? "500px" : "0px" }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
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

export default Faq;
