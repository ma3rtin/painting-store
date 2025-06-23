import React from 'react'
import "./StaticStyle.css"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        
        <div className="footer-brand">
          <h4>Painting Store 🎨</h4>
          <p>Curated art collections for true enthusiasts.</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/cart">Cart</a>
        </div>

        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Painting Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

