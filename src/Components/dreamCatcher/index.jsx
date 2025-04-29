import React, { useState } from "react";
import "./style.css";
import dreamcatcherItem from "../../data/dreamcatcherItems.json";
import { Link } from "react-router-dom";


const DreamCatcher = () => {
  const [products, setProducts] = useState(dreamcatcherItem);
  const [isPriceDescending, setIsPriceDescending] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleFavClick = (item) => {
    console.log("item", item);
    const storedItems = JSON.parse(localStorage.getItem("favItem")) || [];

    let updatedCart;

    const existingIndex = storedItems.findIndex(
      (i) => i.title === item.title
    );
    console.log('existingIndex', existingIndex)

    if (existingIndex === -1) {
      updatedCart = [...storedItems, item]
      localStorage.setItem("favItem", JSON.stringify(updatedCart));
    }
  };
  const updateQuantity = (e, index, delta) => {
    // e.preventDefault();
    setProducts((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: Math.max(0, item.quantity + delta),
            }
          : item
      )
    );

    // Get cart items from localStorage
    const storedItems = JSON.parse(localStorage.getItem("cartItem")) || [];

    const updatedItem = {
      ...products[index],
      quantity: Math.max(0, products[index].quantity + delta),
    };

    let updatedCart;

    const existingIndex = storedItems.findIndex(
      (i) => i.title === updatedItem.title
    );

    if (existingIndex !== -1) {
      // Update existing item
      updatedCart = storedItems.map((i, idx) =>
        idx === existingIndex
          ? { ...i, quantity: Math.max(0, i.quantity + delta) }
          : i
      );
    } else {
      // Add new item
      updatedCart = [...storedItems, updatedItem];
    }

    // Save back to localStorage
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  const handleFilterClick = () => {
    console.log("Filter clicked");
    if (!isFiltered) {
      const filteredProducts = dreamcatcherItem.filter((item) =>
        item.title.toLowerCase().includes("dreamcatcher")
      );
      setProducts(filteredProducts);
    } else {
      setProducts(dreamcatcherItem); // Reset to original list
    }
    setIsFiltered(!isFiltered); // Toggle filter state
  };

  const handleSortByPriceClick = () => {
    console.log("Sort By Price clicked");
    const sortedProducts = [...products].sort((a, b) =>
      isPriceDescending ? b.price - a.price : a.price - b.price
    );
    setProducts(sortedProducts);
    setIsPriceDescending(!isPriceDescending); // Toggle for next click
  };

  return (
    <>
      <header>
        <div class="contact-info">
          <span>CONTACT - 79666 8310</span>
          <span>MAIL - care@anekcreation.com</span>
          <Link to="https://www.instagram.com/anek.creations?igsh=M2xtcGpkenEydDdz" target="_blank" rel="noopener noreferrer"><p>Instagram</p></Link>
        </div>
        <div class="navbar">
          <Link to="/" class="logo">
            <img
              class="logo_image"
              src="/images/anek logo.jpg"
              alt="logo1"
              height="20px"
              width="20px"
            />
            Anek Creations
          </Link>
          <div class="icons">
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
      <div class="container">
        <div class="header">Dreamcatcher</div>
        <div class="buttons">
          <button class="sort_by_btn" onClick={() => handleFilterClick()}>
            Filter by name
          </button>
          <button class="sort_by_btn" onClick={() => handleSortByPriceClick()}>
            Sort By Price
          </button>
        </div>

        <div class="grid">
          {products.map((item, index) => (
            <div class="card" key={index}>
              <div class="fav-icon-wrapper">
                <button
                  class="fav-button"
                  onClick={() => handleFavClick(item)}
                  title="Add to Wishlist"
                >
                  ❤️
                </button>
              </div>
              <Link to="#">
                <img src={item.image} alt={item.title} />
                <div class="card-content">
                  <h2>{item.title}</h2>
                  <p class="price">
                    ₹{item.price}{" "}
                    <span class="old-price">₹{item.oldPrice}</span>
                  </p>
                  <p class="discount">{item.discount}</p>

                  <div class="quantity-controls">
                    <button onClick={(e) => updateQuantity(e, index, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={(e) => updateQuantity(e, index, 1)}>
                      +
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div class="footer-columns">
          <div>
            <h3>Contact</h3>
            <p>Phone: 796668310</p>
            <p>Email: care@anekcreation.com</p>
          </div>
          <div>
            <h3>Categories</h3>
            <Link to="/all">
              <p>All Products</p>
            </Link>
            <Link to="/resin">
              <p>Resin Art</p>
            </Link>
            <Link to="/crochet">
              <p>Crochet Art</p>
            </Link>
            <Link to="/weddingEssential">
              <p>Jewellery</p>
            </Link>
          </div>
          <div>
            <h3>Information</h3>
            <Link to="/aboutus">
              <p>About Us</p>
            </Link>
            <Link to="/terms">
              <p>Terms & Conditions</p>
            </Link>
            <Link to="/privacy">
              <p>Privacy & Policy</p>
            </Link>
          </div>
          <div>
            <h3>Quick Links</h3>
            <p>My Account</p>
            <Link to="/faq">
              <p>Questions?</p>
            </Link>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 Anek Creations. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default DreamCatcher;
