import React, { useEffect } from 'react';
import img_1 from '../../images/img_1.jpg';
import img_2 from '../../images/img_2.jpg';
import img_3 from '../../images/img_3.jpg';
import img_4 from '../../images/img_4.jpg';
import img_5 from '../../images/img_5.jpg';
import img_6 from '../../images/img_6.jpg';
import img_7 from '../../images/img_7.jpg';
import img_8 from '../../images/img_8.jpg';

import '../../styles/our_services.css';

const Services = () => {
    useEffect(() => {
        const revertCards = document.querySelectorAll('.card');

        // Ensure we have card elements available
        if (revertCards.length > 0) {
            revertCards.forEach(card => {
                const backOfCard = card.querySelector('.behind-card'); // Find the .behind-card within each card

                if (backOfCard) {
                    // Define the event handlers
                    const handleMouseOver = () => {
                        card.style.transform = 'rotateY(180deg)';
                        card.style.transition = 'transform 0.5s ease-in-out'; // Smooth rotation
                        backOfCard.classList.add('show');
                        backOfCard.classList.add('result');
                    };

                    const handleMouseOut = () => {
                        card.style.transform = 'rotateY(0deg)';
                        card.style.transition = 'transform 0.5s ease-in-out'; // Smooth rotation
                        backOfCard.classList.remove('show');
                        backOfCard.classList.remove('result');
                    };

                    // Add event listeners
                    card.addEventListener('mouseover', handleMouseOver);
                    card.addEventListener('mouseout', handleMouseOut);

                    // Attach the event handlers to the element for cleanup later
                    card._handleMouseOver = handleMouseOver;
                    card._handleMouseOut = handleMouseOut;
                }
            });
        } else {
            console.error('Error: No .card elements found.');
        }

        // Proper cleanup of event listeners on component unmount
        return () => {
            revertCards.forEach(card => {
                if (card._handleMouseOver && card._handleMouseOut) {
                    card.removeEventListener('mouseover', card._handleMouseOver);
                    card.removeEventListener('mouseout', card._handleMouseOut);
                }
            });
        };
    }, []);

    const handleButtonClick = (link) => {
        window.location.href = link;
    };


    return (
        <div id='container'>
            <section className='services-section'>
                <h3>Our Services</h3>

                {/* First Card */}
                <article className='card'>
                    <div className="front">
                        <img src={img_1} alt='dog Img' className='img' />
                        <div className="tagline">Find a friend</div>
                    </div>
                    <div className='behind-card'>
                        <p>This is a description for the first service.</p>
                        <button className="card-button" onClick={() => handleButtonClick('/service1')}>Discover</button>
                    </div>
                </article>

                {/* Second Card */}
                <article className='card'>
                    <div className="front">
                        <img src={img_2} alt='dog Img' className='img' />
                        <div className="tagline">Need some Food?</div>
                    </div>
                    <div className='behind-card'>
                        <p>This is a description for the second service.</p>
                        <button className="card-button" onClick={() => handleButtonClick('/service2')}>Discover</button>
                    </div>
                </article>

                {/* Third Card */}
                <article className='card'>
                    <div className="front">
                        <img src={img_3} alt='dog Img' className='img' />
                        <div className="tagline">Vaccinate your pet</div>
                    </div>
                    <div className='behind-card'>
                        <p>This is a description for the third service.</p>
                        <button className="card-button" onClick={() => handleButtonClick('/service3')}>Discover</button>
                    </div>
                </article>

                {/* Fourth Card */}
                <article className='card'>
                    <div className="front">
                        <img src={img_4} alt='dog Img' className='img' />
                        <div className="tagline">Post your cute pet’s pics</div>
                    </div>
                    <div className='behind-card'>
                        <p>This is a description for the fourth service.</p>
                        <button className="card-button" onClick={() => handleButtonClick('/service4')}>Discover</button>
                    </div>
                </article>

                {/* Fifth Card */}
                <article className='card'>
                    <div className="front">
                        <img src={img_5} alt='dog Img' className='img' />
                        <div className="tagline">Get a treat for your pets</div>
                    </div>
                    <div className='behind-card'>
                        <p>This is a description for the fifth service.</p>
                        <button className="card-button" onClick={() => handleButtonClick('/service5')}>Discover</button>
                    </div>
                </article>

                {/* Sixth Card */}
                <article className='card'>
                    <div className="front">
                        <img src={img_6} alt='dog Img' className='img' />
                        <div className="tagline">Wildlife Photography</div>
                    </div>
                    <div className='behind-card'>
                        <p>This is a description for the sixth service.</p>
                        <button className="card-button" onClick={() => handleButtonClick('/service6')}>Discover</button>
                    </div>
                </article>

                {/* Seventh Card */}
                <article className='card'>
                    <div className="front">
                        <img src={img_7} alt='dog Img' className='img' />
                        <div className="tagline">Get someone to walk your dogs</div>
                    </div>
                    <div className='behind-card'>
                        <p>This is a description for the seventh service.</p>
                        <button className="card-button" onClick={() => handleButtonClick('/service7')}>Discover</button>
                    </div>
                </article>

                {/* Eighth Card */}
                <article className='card'>
                    <div className="front">
                        <img src={img_8} alt='dog Img' className='img' />
                        <div className="tagline">Sell your products</div>
                    </div>
                    <div className='behind-card'>
                        <p>This is a description for the eighth service.</p>
                        <button className="card-button" onClick={() => handleButtonClick('/service8')}>Discover</button>
                    </div>
                </article>
            </section>
        </div>
    );



};

export default Services;
