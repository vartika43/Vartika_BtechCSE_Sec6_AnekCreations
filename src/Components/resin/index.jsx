import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import resinItems from "../../data/resinItems.json";



const Resin = () => {

    const [products, setProducts] = useState(resinItems);
    const [isPriceDescending, setIsPriceDescending] = useState(false);
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
    
    const updateQuantity = (e,index, delta) => {
      e.preventDefault();
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
    };
  
  
    const handleFilterClick = () => {
        console.log("Filter clicked");
        
        if (!isFiltered) {
            const filteredProducts = products.filter(item =>
                item.title.toLowerCase().includes("dreamcatcher")
            );
    
            // If no products match, display a message and don't apply the sort
            if (filteredProducts.length === 0) {
                console.log("No products found with 'dreamcatcher' in the title.");
            } else {
                // Sort filtered products by title in ascending order
                const sortedFilteredProducts = filteredProducts.sort((a, b) =>
                    a.title.localeCompare(b.title)
                );
                setProducts(sortedFilteredProducts);
            }
        } else {
            // Reset to original list with sorting in descending order
            const sortedDescending = [...resinItems].sort((a, b) =>
                b.title.localeCompare(a.title)
            );
            setProducts(sortedDescending); // Reset products
        }
        
        setIsFiltered(!isFiltered); // Toggle filter state
    };
    
      
    
    const handleSortByPriceClick = () => {
      console.log("Sort By Price clicked");
      const sortedProducts = [...products].sort((a, b) =>
        isPriceDescending ? b.price - a.price : a.price - b.price
      );
      console.log('sortedProducts', sortedProducts)
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
        <Link
          href="https://web.whatsapp.com/"
          target="_blank"
          class="whatsapp-float"
        >
          <img
            src="https://th.bing.com/th/id/OIP.tUbodlavP44WAkBRK3knLgHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="WhatsApp"
            width="60"
            height="60"
          />
        </Link>

        <div class="navbar">
          <Link to='/' class="logo">
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
<Link to='/login'>👤 Profile</Link>
</span>
          </div>
        </div>
      </header>

      <div class="container">
        <div class="header">Resin Art</div>
        <div class="buttons">
          <button class='sort_by_btn' onClick={() => handleFilterClick()}>Filter by name</button>
          <button class='sort_by_btn' onClick={() => handleSortByPriceClick()}>Sort By Price</button>
        </div>
        <div className="grid">
          {products.map((item, index) => (
            <div className="card" key={index}>
            <div className="fav-icon-wrapper">
              <button
                className="fav-button"
                onClick={() => handleFavClick(item)}
                title="Add to Wishlist"
              >
                ❤️
              </button>
            </div>
            <Link to="#">
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <h2>{item.title}</h2>
                <p className="price">
                  ₹{item.price}{" "}
                  <span className="old-price">₹{item.oldPrice}</span>
                </p>
                <p className="discount">{item.discount}</p>

                <div className="quantity-controls">
                  <button onClick={(e) => updateQuantity(e,index, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={(e) => updateQuantity(e,index, 1)}>+</button>
                </div>
              </div>
            </Link>
          </div>
          ))}
        </div>
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

export default Resin;
