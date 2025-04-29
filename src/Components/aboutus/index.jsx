import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Aboutus = () => {
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
   
    <div class="about-us-container">
  <section class="company-overview">
    <h2>About Anek Creation</h2>
    <p>
      Welcome to Anek Creation, your premier online destination for unique and handcrafted goods. Founded with a passion for creativity and a commitment to quality, we strive to bring you a curated collection of products that reflect artistry, innovation, and individuality.
    </p>
    <p>
      Our name, "Anek," meaning "many" or "various," embodies the diverse range of creations you'll discover in our store. From intricately designed apparel and handcrafted jewelry to thoughtfully curated home decor and personalized gifts, we offer something special for every taste and occasion.
    </p>
  </section>

  <section class="our-mission">
    <h2>Our Mission</h2>
    <p>
      At Anek Creation, our mission is to empower artisans and celebrate their skills by providing a platform to showcase their exceptional work. We are dedicated to fostering a community that values craftsmanship, ethical sourcing, and sustainable practices.
    </p>
    <p>
      We believe in the beauty of handmade items and the stories they tell. By connecting you directly with the creators, we aim to offer a more meaningful and personal shopping experience.
    </p>
  </section>

  <section class="our-values">
    <h2>Our Core Values</h2>
    <ul>
      <li><strong>Creativity:</strong> We champion imaginative design and unique expressions.</li>
      <li><strong>Quality:</strong> We are committed to offering products crafted with care and attention to detail.</li>
      <li><strong>Ethical Practices:</strong> We prioritize fair labor and responsible sourcing.</li>
      <li><strong>Community:</strong> We aim to build a supportive ecosystem for both our customers and our creators.</li>
      <li><strong>Individuality:</strong> We celebrate the unique style and preferences of each customer.</li>
    </ul>
  </section>


  <section class="contact-us">
    <h2>Get in Touch</h2>
    <p>
      We'd love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to <Link to="/contact">contact us</Link>.
    </p>
  </section>
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
            <Link to="/login"><p>My Account</p></Link>
          
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
export default Aboutus;
