import React, { useEffect, useMemo } from 'react';
import Card from './services_card'; // Import the Card component

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
        // Code for handling the card flip animations
        const revertCards = document.querySelectorAll('.card');

        if (revertCards.length > 0) {
            revertCards.forEach(card => {
                const backOfCard = card.querySelector('.behind-card');

                if (backOfCard) {
                    const handleMouseOver = () => {
                        card.style.transform = 'rotateY(180deg)';
                        card.style.transition = 'transform 0.5s ease-in-out';
                        backOfCard.classList.add('show', 'result');
                    };

                    const handleMouseOut = () => {
                        card.style.transform = 'rotateY(0deg)';
                        card.style.transition = 'transform 0.5s ease-in-out';
                        backOfCard.classList.remove('show', 'result');
                    };

                    card.addEventListener('mouseover', handleMouseOver);
                    card.addEventListener('mouseout', handleMouseOut);

                    card._handleMouseOver = handleMouseOver;
                    card._handleMouseOut = handleMouseOut;
                }
            });
        } else {
            console.error('Error: No .card elements found.');
        }

        return () => {
            revertCards.forEach(card => {
                if (card._handleMouseOver && card._handleMouseOut) {
                    card.removeEventListener('mouseover', card._handleMouseOver);
                    card.removeEventListener('mouseout', card._handleMouseOut);
                }
            });
        };
    }, []);

    // Using useMemo to memoize the services data
    const servicesData = useMemo(() => [
        { imgSrc: img_1, altText: 'dog Img', tagline: 'Find a friend', description: 'This is a description for the first service.', link: '/service1' },
        { imgSrc: img_2, altText: 'dog Img', tagline: 'Need some Food?', description: 'This is a description for the second service.', link: '/service2' },
        { imgSrc: img_3, altText: 'dog Img', tagline: 'Vaccinate your pet', description: 'This is a description for the third service.', link: '/service3' },
        { imgSrc: img_4, altText: 'dog Img', tagline: 'Post your cute pet’s pics', description: 'This is a description for the fourth service.', link: '/service4' },
        { imgSrc: img_5, altText: 'dog Img', tagline: 'Get a treat for your pets', description: 'This is a description for the fifth service.', link: '/service5' },
        { imgSrc: img_6, altText: 'dog Img', tagline: 'Wildlife Photography', description: 'This is a description for the sixth service.', link: '/service6' },
        { imgSrc: img_7, altText: 'dog Img', tagline: 'Get someone to walk your dogs', description: 'This is a description for the seventh service.', link: '/service7' },
        { imgSrc: img_8, altText: 'dog Img', tagline: 'Sell your products', description: 'This is a description for the eighth service.', link: '/service8' },
    ], []); // Memoize the services data

    return (
        <div id='container' loading="lazy">
            <section className='services-section'>
                <h3>Our Services</h3>

                {/* Using the Card component for each service */}
                {servicesData.map((service, index) => (
                    <Card
                        key={index}
                        imgSrc={service.imgSrc}
                        altText={service.altText}
                        tagline={service.tagline}
                        description={service.description}
                        link={service.link}
                    />
                ))}
            </section>
        </div>
    );
};

export default Services;
