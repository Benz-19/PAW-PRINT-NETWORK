// groom_image.js
import React from 'react';

const GroomImage = ({ imgSrc, altText }) => {
    return (
        <img src={imgSrc} alt={altText} className="grid-item" loading="lazy" />
    );
};

export default GroomImage;
