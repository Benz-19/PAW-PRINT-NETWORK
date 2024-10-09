// FeedItem.js
import React from 'react';

const FeedItem = ({ imgSrc, altText, large }) => {
    return (
        <div className={`grid-feed-item ${large ? 'large' : ''}`}>
            <img src={imgSrc} alt={altText} />
        </div>
    );
};

export default FeedItem;
