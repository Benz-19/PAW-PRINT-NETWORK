import React, { useMemo } from 'react';
import restaurant_1 from '../../images/restaurant/restaurant_1.jpg';
import restaurant_2 from '../../images/restaurant/restaurant_2.jpg';
import restaurant_3 from '../../images/restaurant/restaurant_3.jpg';
import restaurant_4 from '../../images/restaurant/restaurant_4.jpg';
import restaurant_5 from '../../images/restaurant/restaurant_5.jpg';
import restaurant_6 from '../../images/restaurant/restaurant_6.jpg';
import restaurant_7 from '../../images/restaurant/restaurant_7.jpg';
import restaurant_8 from '../../images/restaurant/restaurant_8.jpg';

import '../../styles/fancy_restaurant.css';
import RestaurantCard from './restaurant_card'; // Import the RestaurantCard component

const FancyRestaurant = () => {
    const restaurants = useMemo(() => [
        { img: restaurant_1, name: 'Restaurant #1', rating: 4.5, description: 'Lorem ipsum Lorem ipsum', large: true },
        { img: restaurant_2, name: 'Restaurant #2', rating: 4.0, description: 'Lorem ipsum Lorem ipsum' },
        { img: restaurant_3, name: 'Restaurant #3', rating: 4.0, description: 'Lorem ipsum Lorem ipsum', large: true },
        { img: restaurant_4, name: 'Restaurant #4', rating: 4.0, description: 'Lorem ipsum Lorem ipsum' },
        { img: restaurant_5, name: 'Restaurant #5', rating: 4.0, description: 'Lorem ipsum Lorem ipsum' },
        { img: restaurant_6, name: 'Restaurant #6', rating: 4.0, description: 'Lorem ipsum Lorem ipsum' },
        { img: restaurant_7, name: 'Restaurant #7', rating: 4.0, description: 'Lorem ipsum Lorem ipsum' },
        { img: restaurant_8, name: 'Restaurant #8', rating: 4.0, description: 'Lorem ipsum Lorem ipsum' },
    ], []); // Memoize the restaurants array

    return (
        <div id='restaurant-container'>
            <div className='restaurant-section'>
                <h3>Take your pets out to a fancy restaurant</h3>
                <div className='restaurant-grid'>
                    {restaurants.map((restaurant, index) => (
                        <RestaurantCard
                            key={index}
                            imgSrc={restaurant.img}
                            name={restaurant.name}
                            rating={restaurant.rating}
                            description={restaurant.description}
                            large={restaurant.large}
                        />
                    ))}
                </div>
                <button className='see-more'>See More</button>
            </div>
        </div>
    );
};

export default React.memo(FancyRestaurant); // Wrap FancyRestaurant with React.memo
