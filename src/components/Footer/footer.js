import React from 'react';
import '../../styles/footer.css';

const Footer = () => {
    return (
        <footer id="footer-container">
            <div className="footer-content">
                {/* Logo and Description */}
                <div className="footer-section">
                    <h3>Paw Print Network</h3>
                    <p>Connecting pet lovers and professionals for all your pet needs.</p>
                </div>

                {/* Links Section */}
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: support@pawprintnetwork.com</p>
                    <p>Phone: +1 (800) 123-4567</p>
                    <p>Address: 123 Pet Lane, Pet City, PA 12345</p>
                </div>

                {/* Social Media Icons */}
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Paw Print Network. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
