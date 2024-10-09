// vet_card.js
import React from 'react';

const DoctorCard = ({ img, name, rating, description }) => {
    return (
        <div className='doctor-card'>
            <div className='doctor-info-head'>
                <div className="rating">
                    <span>{rating}/5.0</span> <span className="star">&#9733;</span>
                </div>
            </div>
            <img src={img} alt={`Doctor ${name}`} />
            <div className='doctor-info'>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DoctorCard;
