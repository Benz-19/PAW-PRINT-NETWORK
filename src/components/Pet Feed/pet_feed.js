import React from 'react';
import img_1 from '../../images/feed/feed_1.jpg';
import img_2 from '../../images/feed/feed_2.jpg';
import img_3 from '../../images/feed/feed_3.jpg';
import img_4 from '../../images/feed/feed_4.jpg';
import img_5 from '../../images/feed/feed_5.jpg';
import img_6 from '../../images/feed/feed_6.jpg';


import '../../styles/pet_feed.css';

const MealSection = () => {
    return (
        <div id='feed-container'>
            <div className='feed-section'>
                <h3>A Hearty meal for your pet</h3>
                <div className='feed-grid'>
                    <div className='grid-feed-item large'>
                        <img src={img_1} alt='meal 1' />
                    </div>
                    <div className='grid-feed-item'>
                        <img src={img_2} alt='meal 2' />
                    </div>
                    <div className='grid-feed-item'>
                        <img src={img_3} alt='meal 3' />
                    </div>
                    <div className='grid-feed-item large'>
                        <img src={img_4} alt='meal 4' />
                    </div>
                    <div className='grid-feed-item large'>
                        <img src={img_1} alt='meal 1' />
                    </div>
                    <div className='grid-feed-item'>
                        <img src={img_2} alt='meal 2' />
                    </div>
                    <div className='grid-feed-item large'>
                        <img src={img_4} alt='meal 4' />
                    </div>
                    <div className='grid-feed-item'>
                        <img src={img_5} alt='meal 5' />
                    </div>
                    <div className='grid-feed-item'>
                        <img src={img_6} alt='meal 6' />
                    </div>

                </div>
                <button className='see-more'>See More</button>
            </div>
        </div>
    );
};

export default MealSection;
