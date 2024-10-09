// RestaurantCard.js
import React from 'react';

const RestaurantCard = ({ imgSrc, name, rating, description, large }) => {
    return (
        <div className={`grid-restaurant-item ${large ? 'large' : ''}`}>
            <div className='restaurant-info-top'>
                <div className="rating">
                    <span>{rating}/5.0</span>
                    <span>⭐</span>
                </div>
            </div>
            <img src={imgSrc} alt={name} />
            <div className="restaurant-info">
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default React.memo(RestaurantCard); // Optimizing re-rendering with React.memo
