import Hero from './components/Hero/Hero.js';
import Services from './components/Our Services/our_services.js';
import GroomPet from './components/Groom Pet/groom_pet.js';
import PetFeed from './components/Pet Feed/pet_feed.js';
import Book from './components/Book Appointment/book_appointment.js';
import TrainPet from './components/Train Pet/pet_train.js';
import FancyRestaurant from './components/Fancy Restaurant/fancy_restaurant.js';
import Footer from './components/Footer/footer.js';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <GroomPet />
      <PetFeed />
      <Book />
      <TrainPet />
      <FancyRestaurant />
      <Footer />
    </div>
  );
}

export default App;
