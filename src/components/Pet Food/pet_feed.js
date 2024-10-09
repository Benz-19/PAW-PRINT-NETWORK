import React, { useMemo } from 'react';
import img_1 from '../../images/feed/feed_1.jpg';
import img_2 from '../../images/feed/feed_2.jpg';
import img_3 from '../../images/feed/feed_3.jpg';
import img_4 from '../../images/feed/feed_4.jpg';
import img_5 from '../../images/feed/feed_5.jpg';
import img_6 from '../../images/feed/feed_6.jpg';
import '../../styles/pet_feed.css';
import FeedItem from './foods'; // Import FeedItem component

const MealSection = () => {
    const feedItems = useMemo(() => [
        { imgSrc: img_1, altText: 'meal 1', large: true },
        { imgSrc: img_2, altText: 'meal 2' },
        { imgSrc: img_3, altText: 'meal 3' },
        { imgSrc: img_4, altText: 'meal 4', large: true },
        { imgSrc: img_1, altText: 'meal 1', large: true },
        { imgSrc: img_2, altText: 'meal 2' },
        { imgSrc: img_4, altText: 'meal 4', large: true },
        { imgSrc: img_5, altText: 'meal 5' },
        { imgSrc: img_6, altText: 'meal 6' }
    ], []); // Memoize the feedItems array

    return (
        <div id='feed-container'>
            <div className='feed-section'>
                <h3>A Hearty meal for your pet</h3>
                <div className='feed-grid'>
                    {feedItems.map((item, index) => (
                        <FeedItem
                            key={index}
                            imgSrc={item.imgSrc}
                            altText={item.altText}
                            large={item.large}
                        />
                    ))}
                </div>
                <button className='see-more'>See More</button>
            </div>
        </div>
    );
};

export default React.memo(MealSection); // Wrap MealSection with React.memo
