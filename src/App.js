import './App.css';
import ContactCard from './ContactCard.js';

function App() {
  return (
    <div className="contacts">
      <ContactCard
          contact={{name: "Mr. Whiskerson", 
          imgUrl: "http://placekitten.com/300/200/", 
          phone: "07756479809", 
          email: "cat1@mail.com"}}
          />

      <ContactCard 
          contact={{name: "Fluffykins",
          imgUrl: "http://placekitten.com/400/200/",
          phone: "07756479810",
          email: "cat2@mail.com"}}/>

      <ContactCard 
          contact={{name: "Destroyer",
          imgUrl: "http://placekitten.com/700/400/",
          phone: "07756479811",
          email: "cat3@mail.com"}}/>

      <ContactCard 
          contact={{name: "Felix",
          imgUrl: "http://placekitten.com/200/100/",
          phone: "07756479812",
          email: "cat4@mail.com"}}/>
    </div>
    
  );
}

export default App;
