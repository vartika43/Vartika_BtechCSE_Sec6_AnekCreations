import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Terms = () => {
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
   
         <div className="terms-conditions-container">
      <section className="introduction">
        <h1>Terms and Conditions</h1>
        <p>
          Please read these Terms and Conditions ("Terms") carefully before using the Anek Creation website (the "Service") operated by Anek Creations ("us", "we", or "our").
        </p>
        <p>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
        </p>
        <p>
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
        </p>
      </section>

      <section className="accounts">
        <h2>Accounts</h2>
        <p>
          When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
        <p>
          You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
        </p>
        <p>
          You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
        </p>
      </section>
      <section className="purchases">
        <h2>Purchases</h2>
        <p>
          If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
        </p>
        <p>
          You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and (ii) the information you supply to us is true, correct, and complete.
        </p>
        <p>
          We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
        </p>
      </section>

      <section className="intellectual-property">
        <h2>Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of Anek Creation and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Anek Creation.
        </p>
      </section>

      <section className="links-to-other-websites">
        <h2>Links To Other Web Sites</h2>
        <p>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by Anek Creation.
        </p>
        <p>
        Anek Creation has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Anek Creation shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
        </p>
      </section>

      <section className="termination">
        <h2>Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
        <p>
          Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account, you may simply discontinue using the Service.
        </p>
      </section>

      <section className="governing-law">
        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
        </p>
      </section>

      <section className="changes">
        <h2>Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least [number] days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        <p>
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
        </p>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please <Link to="/contact">contact us</Link>.
        </p>
      </section>
    </div>
 <footer>
        <div className="footer-columns">
          <div>
            <h3>Contact</h3>
            <p>Phone: 796668310</p>
            <p>Email: care@anekcreation.com</p>
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
export default Terms;