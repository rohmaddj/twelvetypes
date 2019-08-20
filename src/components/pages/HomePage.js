import React from 'react';
import ImageSlider from '../child/ImageSlider';
import HeadLine from '../child/HeadLine';
import About from '../child/About';
import Login from '../child/Login';
import JoinNow from '../child/JoinNow';
import Contact from '../child/Contact';
import faker from 'faker';

const HomePage = (props) => {
  return (
    <div>
      <ImageSlider />
      <HeadLine />
      <div className="ui container">
        <About image={faker.image.avatar()} alt={faker.lorem.word()} />
        <Login {...props} />
        <JoinNow />
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;