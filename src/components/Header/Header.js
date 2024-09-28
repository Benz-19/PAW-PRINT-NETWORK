import React, { useState, useEffect } from 'react';
import '../../styles/Header.css';
import '../../styles/hero_responsive_design.css';
import menuBtn from '../../images/menu-btn.png';
import closeBtn from '../../images/close-btn.png';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false); // To track screen width
    const [isMenuOpen, setIsMenuOpen] = useState(false); // To track menu visibility

    // Monitor screen width to toggle mobile view
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className='nav-bar'>
                {/* Desktop Navigation */}
                <ul className={isMobile ? 'hide-nav' : ''}>
                    <li>Home</li>
                    <li>Our Services</li>
                    <li>Products</li>
                    <li>Consult a Vet</li>
                    <li>Book a Salon</li>
                    <li>Contact us</li>
                </ul>

                {/* Menu button for mobile view */}
                {isMobile && (
                    <div onClick={toggleMenu} className="menu-icon">
                        <img src={menuBtn} alt='menu Button' className='menu-btn' />
                    </div>
                )}
            </nav>

            {/* Mobile-view Navigation */}
            {isMobile && isMenuOpen && (
                <div id='mobile-nav'>
                    <ul>
                        <li onClick={toggleMenu}>
                            <img src={closeBtn} alt='close Button' className='close-btn' />
                        </li>
                        <li>Home</li>
                        <li>Our Services</li>
                        <li>Products</li>
                        <li>Consult a Vet</li>
                        <li>Book a Salon</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
