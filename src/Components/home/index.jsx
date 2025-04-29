import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import item999 from "../../data/item_999.json";
import item199 from "../../data/item_199.json";

const items = [
  { img: "https://m.media-amazon.com/images/X/bxt1/M/obxt1BWQCV4ul0a._SL360_QL95_FMwebp_.jpg", alt: "Earrings", label: "Crochet" },
  { img: "https://m.media-amazon.com/images/X/bxt1/M/Rbxt1BqRLNFMFZ7._SL360_QL95_FMwebp_.jpg", alt: "Resin Frame", label: "Resin Frame" },
  { img: "https://m.media-amazon.com/images/X/bxt1/M/Tbxt1hqR3-nlwAd._SL360_QL95_FMwebp_.jpg", alt: "Dream Catcher", label: "Dream Catcher" }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlide = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = items.length - 1;
    if (newIndex >= items.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

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
         
          <div className="icons">
            <Link to="/favourite">❤ Wishlist</Link>
            

            <Link to="/cart">🛒 Cart</Link>

            <Link to="/login">👤 Profile</Link>
            
          </div>
        </div>
      </header>

      <section className="categories">
        {[{
          img: "https://m.media-amazon.com/images/X/bxt1/M/dbxt1BLkha9lw9C._SL360_QL95_FMwebp_.jpg",
          alt: "Dream Catcher",
          to: "/dreamCatcher",
          label: "Dream Catcher"
        }, {
          img: "https://m.media-amazon.com/images/X/bxt1/M/fbxt1RgNf0ST9Hm._SL360_QL95_FMwebp_.jpg",
          alt: "Resin Art",
          to: "/resin",
          label: "Resin Art"
        }, {
          img: "https://m.media-amazon.com/images/X/bxt1/M/Ybxt1BtlV4luSpM._SL300_QL95_FMwebp_.png",
          alt: "Wedding Essential",
          to: "/weddingEssential",
          label: "Wedding Essential"
        }, {
          img: "https://m.media-amazon.com/images/X/bxt1/M/Wbxt1RNRkBaYL-r._SL300_QL95_FMwebp_.png",
          alt: "Crochet Art",
          to: "/crochet",
          label: "Crochet Art"
        }].map((cat, idx) => (
          <div key={idx} className="category">
            <img src={cat.img} alt={cat.alt} />
            <Link to={cat.to}><p>{cat.label}</p></Link>
          </div>
        ))}
      </section>

      <section className="product-highlights">
        <section id="food">
          <h2>Featured Products</h2>
          <div className="food-container container">
            <div className="food-type fruite">
              <Link to="/feartureProduct" state={{ filter: "under199", data: item199, title: "Under 199" }} className="img-container">
                <img src="https://m.media-amazon.com/images/X/bxt1/M/cbxt1Be3cjyjNmF._SL360_QL95_FMwebp_.jpg" alt="error" />
                <div className="img-content">
                  <h3>Under ₹199</h3>
                  <Link to="/item_199" className="btn btn-primary">Shop Now</Link>
                </div>
              </Link>
            </div>
            <div className="food-type vegetable">
              <Link to="/feartureProduct" state={{ filter: "under999", data: item999, title: "Under 999" }} className="img-container">
                <img src="https://m.media-amazon.com/images/X/bxt1/M/obxt1BWQCV4ul0a._SL360_QL95_FMwebp_.jpg" alt="error" />
                <div className="img-content">
                  <h3>Under ₹999</h3>
                  <Link to="/item_999" className="btn btn-primary">Shop Now</Link>
                </div>
              </Link>
            </div>
            <div className="food-type grin">
              <Link to="/coustmize" className="img-container">
                <img src="https://m.media-amazon.com/images/X/bxt1/M/fbxt1xWa1dKQ7Zc._SL360_QL95_FMwebp_.jpg" alt="error" />
                <div className="img-content">
                  <h3>Customize Item</h3>
                  <Link to="/coustmize" className="btn btn-primary">Customize Here</Link>
                
                </div>
              </Link>
            </div>
          </div>
        </section>
      </section>

      
      <section className="best-sellers">
  <div className="slider-container">
    <h2 className="best-sellers-title">✨ Some of Our Best Sellers ✨</h2>

    <div className="seller-slider">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`seller-item ${idx === currentIndex ? "active" : ""}`}
        >
          <Link to={item.link}>
            <img src={item.img} alt={item.alt} className="seller-img" />
          </Link>
          <span className="seller-label">{item.label}</span>
        </div>
      ))}
    </div>

    <div className="slider-buttons">
      <button className="prev" onClick={() => moveSlide(-1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => moveSlide(1)}>
        &#10095;
      </button>
    </div>

    {/* New Shop Now button */}
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <Link to="/bestseller" className="btn btn-primary">
        See all our bestseller
      </Link>
    </div>

  </div>
</section>




      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-container">
          {["I absolutely love my dream catcher! It's beautifully made and adds a lovely touch to my room.", "The resin art I purchased was stunning! It exceeded my expectations and looks amazing on my wall.", "Anek Creations has the best handcrafted items. I always find unique gifts for my friends and family."].map((quote, idx) => (
            <div key={idx} className="testimonial">
              <p>"{quote}"</p>
              <span>- {['Sarah J.', 'Mark T.', 'Emily R.'][idx]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        {[{ icon: "👥", text: "900+ Happy Customers" }, { icon: "🎨", text: "Handcrafted Items" }, { icon: "💰", text: "Great Prices" }, { icon: "🚚", text: "Timely Delivery" }].map((feature, idx) => (
          <div key={idx} className="feature">
            <span>{feature.icon}</span>
            <p>{feature.text}</p>
          </div>
        ))}
      </section>

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

export default Home;


