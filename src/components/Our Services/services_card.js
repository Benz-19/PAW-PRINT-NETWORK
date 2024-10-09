// services_card.js
import React from 'react';

const Card = ({ imgSrc, altText, tagline, description, link }) => {
    const handleButtonClick = () => {
        window.location.href = link;
    };

    return (
        <article className='card' loading="lazy">
            <div className="front">
                <img src={imgSrc} alt={altText} className='img' loading="lazy" />
                <div className="tagline">{tagline}</div>
            </div>
            <div className='behind-card'>
                <p>{description}</p>
                <button className="card-button" onClick={handleButtonClick}>Discover</button>
            </div>
        </article>
    );
};

export default Card;
