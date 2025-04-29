import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FaInstagram } from 'react-icons/fa';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cartItem')) || [];
    console.log('data', data)
    setCartData(data);
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cartData]);

  const calculateTotal = () => {
    const totalValue = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalValue);
  };

  const incrementQuantity = (index) => {
    const updatedCart = [...cartData];
    updatedCart[index].quantity += 1;
    setCartData(updatedCart);
  };

  const decrementQuantity = (index) => {
    const updatedCart = [...cartData];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1); // Remove item if quantity is 1 and user decrements
    }
    setCartData(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = [...cartData];
    updatedCart.splice(index, 1);
    setCartData(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };


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

      {/* Cart Section */}
      <div className="cart-container">
        {cartData.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-icon">🛒</div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything yet.</p>
            <Link to="/">
              <button className="shop-btn">Start Shopping</button>
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <h2 className="cart-content-title">Your Shopping Cart</h2>
            {cartData.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ₹{item.price}</p>
                  <p>Discount: {item.discount}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decrementQuantity(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(index)}>+</button>
                  </div>
                  <p>Subtotal: ₹{item.price * item.quantity}</p>
                </div>
                <button className="remove-btn" onClick={() => removeItem(index)}>Remove</button>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="cart-summary">
              <h3 className="cart-total-count">Total: ₹{total}</h3>
              <Link to="/confirmorder">
                <button className="checkout-btn">Confirm Order</button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-columns">
          <div>
            <h3>Contact</h3>
            <p>Phone: 796668310</p>
            <p>Email: care@anekcreation.com</p>
            <Link to="https://www.instagram.com/anek.creations?igsh=M2xtcGpkenEydDdz" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={24} style={{ color: '#E1306C' }} />
    </Link>
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

export default Cart;
