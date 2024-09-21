import React from 'react';
import '../../styles/Header.css';


const Header = () => {
    return (
        <header>
            <nav className='nav-bar'>
                <ul>
                    <li>Home</li>
                    <li>Our Services</li>
                    <li>Products</li>
                    <li>Consult a Vet</li>
                    <li>Book a Salon</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;