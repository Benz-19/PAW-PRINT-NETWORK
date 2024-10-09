import React, { Suspense } from 'react';
import Hero from './components/Hero.js';
import Services from './components/Our Services/our_services.js';
import GroomPet from './components/Groom Pet/groom_pet.js';
import PetFeed from './components/Pet Food/pet_feed.js';
import Book from './components/Book Appointment/book_appointment.js';
import TrainPet from './components/Train Pet/pet_train.js';
import FancyRestaurant from './components/Pet Restaurant/fancy_restaurant.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Services />
        <GroomPet />
        <PetFeed />
        <Book />
        <TrainPet />
        <FancyRestaurant />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
