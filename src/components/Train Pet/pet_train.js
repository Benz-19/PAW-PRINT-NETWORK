import React, { useMemo } from 'react';
import train_1 from '../../images/train pets/train_1.jpg';
import train_2 from '../../images/train pets/train_2.jpg';
import train_3 from '../../images/train pets/train_3.jpg';
import train_4 from '../../images/train pets/train_4.jpg';
import train_5 from '../../images/train pets/train_5.jpg';
import train_6 from '../../images/train pets/train_6.jpg';

import '../../styles/pet_train.css';
import TrainCard from './pet_card';

const PetTrain = () => {
    const trainingData = useMemo(() => [
        { Image: train_1, name: 'Arijit Singh', rating: 4.5, description: 'Lorem ipsum Lorem ipsum', large: true },
        { Image: train_2, name: 'John Doe', rating: 4.2, description: 'Lorem ipsum Lorem ipsum' },
        { Image: train_3, name: 'Jane Doe', rating: 4.8, description: 'Lorem ipsum Lorem ipsum', large: true },
        { Image: train_4, name: 'Mike Johnson', rating: 4.7, description: 'Lorem ipsum Lorem ipsum' },
        { Image: train_5, name: 'Samantha Brown', rating: 4.3, description: 'Lorem ipsum Lorem ipsum' },
        { Image: train_6, name: 'Chris Evan', rating: 4.4, description: 'Lorem ipsum Lorem ipsum' },
    ], []); // Memoize the trainingData array

    return (
        <div id='train-container'>
            <div className='train-section'>
                <h3>Train your pets for a better future</h3>
                <div className='train-grid'>
                    {trainingData.map((trainer, index) => (
                        <TrainCard
                            key={index}
                            imgSrc={trainer.Image}
                            name={trainer.name}
                            rating={trainer.rating}
                            description={trainer.description}
                            large={trainer.large}
                        />
                    ))}
                </div>
                <button className='see-more'>See More</button>
            </div>
        </div>
    );
};

export default React.memo(PetTrain); // Wrap PetTrain with React.memo
