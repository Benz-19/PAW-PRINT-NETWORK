import React, { useEffect, useRef } from 'react';
import doc_1 from '../../images/doctors/doc_1.jpg';
import doc_2 from '../../images/doctors/doc_2.jpg';
import doc_3 from '../../images/doctors/doc_3.jpg';
import doc_4 from '../../images/doctors/doc_4.jpg';
import doc_5 from '../../images/doctors/doc_5.jpg';
import doc_6 from '../../images/doctors/doc_6.jpg';
import doc_7 from '../../images/doctors/doc_7.jpg';

import '../../styles/book_appointment.css';

const Book = () => {
    const doctors = [
        { img: doc_1, name: 'Dr. Arijit Singh', rating: 4.5, description: 'Expert in cardiology' },
        { img: doc_2, name: 'Dr. Rohit Sharma', rating: 4.0, description: 'Pediatric specialist' },
        { img: doc_3, name: 'Dr. Kavita Rao', rating: 4.8, description: 'Neurologist' },
        { img: doc_4, name: 'Dr. Priya Mehta', rating: 4.6, description: 'Dermatologist' },
        { img: doc_5, name: 'Dr. Sameer Khan', rating: 4.7, description: 'Orthopedic surgeon' },
        { img: doc_6, name: 'Dr. Leena Desai', rating: 4.9, description: 'General Practitioner' },
        { img: doc_7, name: 'Dr. Anil Patel', rating: 4.3, description: 'Psychiatrist' }
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const cards = document.querySelectorAll('.doctor-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (window.scrollY >= 5700) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.2 });

        cards.forEach(card => {
            observer.observe(card);
        });

        return () => {
            cards.forEach(card => {
                observer.unobserve(card);
            });
        };
    }, []);

    return (
        <div id='appointment-container'>
            <h3>Consult an appointment</h3>
            <div className='carousel' ref={containerRef}>
                <div className='carousel-inner'>
                    {doctors.map((doctor, index) => (
                        <div className='doctor-card' key={index}>
                            <img src={doctor.img} alt={`Doctor ${doctor.name}`} />
                            <div className='doctor-info'>
                                <div className="rating">
                                    <span>{doctor.rating}/5.0</span> <span className="star">&#9733;</span>
                                </div>
                                <h4>{doctor.name}</h4>
                                <p>{doctor.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className='see-more'>See More</button>
        </div>
    );
};

export default Book;
