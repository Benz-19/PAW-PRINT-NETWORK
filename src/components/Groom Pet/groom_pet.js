import React from 'react';
import img_1 from '../../images/img_1.jpg';
import img_2 from '../../images/img_2.jpg';
import img_3 from '../../images/img_3.jpg';
import img_4 from '../../images/img_4.jpg';
import img_5 from '../../images/img_5.jpg';
import img_6 from '../../images/img_6.jpg';
import img_7 from '../../images/img_7.jpg';
import img_8 from '../../images/img_8.jpg';
import '../../styles/groom_pet.css';

const GroomPet = () => {
    return (
        <div id='groom-container'>
            <section className='groom-section'>
                <h3>Groom your pets like a princess</h3>
                <div className="image-grid">
                    <img src={img_1} alt="Pet Grooming" className="grid-item" />
                    <img src={img_2} alt="Pet Grooming" className="grid-item" />
                    <img src={img_3} alt="Pet Grooming" className="grid-item" />
                    <img src={img_4} alt="Pet Grooming" className="grid-item" />
                    <img src={img_5} alt="Pet Grooming" className="grid-item" />
                    <img src={img_6} alt="Pet Grooming" className="grid-item" />
                    <img src={img_7} alt="Pet Grooming" className="grid-item" />
                    <img src={img_8} alt="Pet Grooming" className="grid-item" />
                </div>
                <button className='see-more'>See More</button>
            </section>
        </div>
    );
};

export default GroomPet;
