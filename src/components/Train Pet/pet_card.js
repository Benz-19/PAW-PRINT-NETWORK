// PetCard.js
import React from 'react';

const TrainCard = ({ imgSrc, name, rating, description, large }) => {
    return (
        <div className={`grid-train-item ${large ? 'large' : ''}`}>
            <div className='train-info-top'>
                <div className="rating">
                    <span>{rating}/5.0</span>
                    <span>⭐</span>
                </div>
            </div>
            <img src={imgSrc} alt={name} />
            <div className="train-info">
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default React.memo(TrainCard); // Optimize re-renders with React.memo
