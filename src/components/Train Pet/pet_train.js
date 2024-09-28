import React from 'react';
import train_1 from '../../images/train pets/train_1.jpg';
import train_2 from '../../images/train pets/train_2.jpg';
import train_3 from '../../images/train pets/train_3.jpg';
import train_4 from '../../images/train pets/train_4.jpg';
import train_5 from '../../images/train pets/train_5.jpg';
import train_6 from '../../images/train pets/train_6.jpg';

import '../../styles/pet_train.css';

const PetTrain = () => {
    return (
        <div id='train-container'>
            <div className='train-section'>
                <h3>Train your pets for a better future</h3>
                <div className='train-grid'>
                    <div className='grid-train-item large'>
                        <img src={train_1} alt='train 1' />
                        <div className="train-info">
                            <div className="rating">
                                <span>4.5/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>Arijit Singh</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className='grid-train-item'>
                        <img src={train_2} alt='train 2' />
                        <div className="train-info">
                            <div className="rating">
                                <span>4.2/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>John Doe</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className='grid-train-item large'>
                        <img src={train_3} alt='train 3' />
                        <div className="train-info">
                            <div className="rating">
                                <span>4.8/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>Jane Doe</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className='grid-train-item'>
                        <img src={train_4} alt='train 4' />
                        <div className="train-info">
                            <div className="rating">
                                <span>4.7/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>Mike Johnson</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className='grid-train-item'>
                        <img src={train_5} alt='train 5' />
                        <div className="train-info">
                            <div className="rating">
                                <span>4.3/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>Samantha Brown</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                    <div className='grid-train-item'>
                        <img src={train_6} alt='train 6' />
                        <div className="train-info">
                            <div className="rating">
                                <span>4.4/5.0</span>
                                <span>⭐</span>
                            </div>
                            <h4>Chris Evan</h4>
                            <p>Lorem ipsum Lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <button className='see-more'>See More</button>
            </div>
        </div>
    );
};

export default PetTrain;
