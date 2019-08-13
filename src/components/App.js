import './style/HomePage.css';
import React from 'react';
import faker from 'faker';
import ImageSlider from './ImageSlider';
import HeadLine from './HeadLine';
import About from './About';
import Login from './Login';
import JoinNow from './JoinNow';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';

class App extends React.Component {

  render() {
    return (
    <div className="pusher">
      <div className="ui inverted vertical masthead center aligned segment linear-background">
        <Header />
        <ImageSlider />
      </div>
      <HeadLine />
      <div className="ui container">
        <About image={faker.image.avatar()} alt={faker.lorem.word()} />
        <Login />
        <JoinNow />
        <Contact />
      </div>
      <Footer />
    </div>
    );
  }
}

export default App;