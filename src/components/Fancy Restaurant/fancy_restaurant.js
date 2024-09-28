import React from 'react';
import restaurant_1 from '../../images/restaurant/restaurant_1.jpg';
import restaurant_2 from '../../images/restaurant/restaurant_2.jpg';
import restaurant_3 from '../../images/restaurant/restaurant_3.jpg';
import restaurant_4 from '../../images/restaurant/restaurant_4.jpg';
import restaurant_5 from '../../images/restaurant/restaurant_5.jpg';
import restaurant_6 from '../../images/restaurant/restaurant_6.jpg';
import restaurant_7 from '../../images/restaurant/restaurant_7.jpg';
import restaurant_8 from '../../images/restaurant/restaurant_8.jpg';

import '../../styles/fancy_restaurant.css';

const FancyRestaurant = () => {
    return (
        <div id='restaurant-container'>
            <div className='restaurant-section'>
                <h3>Take your pets out to a fancy restaurant</h3>
                <div className='restaurant-grid'>
                    <div className='grid-restaurant-item large'>
                        <img src={restaurant_1} alt='restaurant 1' />
                        <div className="restaurant-info">
                            <div className="rating">
                                <span>4.5/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>Restaurant #1</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className='grid-restaurant-item'>
                        <img src={restaurant_2} alt='restaurant 2' />
                        <div className="restaurant-info">
                            <div className="rating">
                                <span>4.0/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>Restaurant #2</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className='grid-restaurant-item large'>
                        <img src={restaurant_3} alt='restaurant 3' />
                        <div className="restaurant-info">
                            <div className="rating">
                                <span>4.8/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>Restaurant #3</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className='grid-restaurant-item'>
                        <img src={restaurant_4} alt='restaurant 4' />
                        <div className="restaurant-info">
                            <div className="rating">
                                <span>4.3/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>Restaurant #4</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className='grid-restaurant-item'>
                        <img src={restaurant_5} alt='restaurant 5' />
                        <div className="restaurant-info">
                            <div className="rating">
                                <span>4.6/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>Restaurant #5</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className='grid-restaurant-item'>
                        <img src={restaurant_6} alt='restaurant 6' />
                        <div className="restaurant-info">
                            <div className="rating">
                                <span>4.2/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>Restaurant #6</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className='grid-restaurant-item'>
                        <img src={restaurant_7} alt='restaurant 7' />
                        <div className="restaurant-info">
                            <div className="rating">
                                <span>4.7/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>Restaurant #7</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className='grid-restaurant-item'>
                        <img src={restaurant_8} alt='restaurant 8' />
                        <div className="restaurant-info">
                            <div className="rating">
                                <span>4.1/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>Restaurant #8</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <button className='see-more'>See More</button>
            </div>
        </div>
    );
};

export default FancyRestaurant;
