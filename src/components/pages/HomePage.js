import React from 'react';
import ImageSlider from '../child/ImageSlider';
import HeadLine from '../child/HeadLine';
import About from '../child/About';
import Login from '../child/Login';
import JoinNow from '../child/JoinNow';
import Contact from '../child/Contact';
import faker from 'faker';

class HomePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <ImageSlider />
        <HeadLine />
        <div className="ui container">
          <About image={faker.image.avatar()} alt={faker.lorem.word()} />
          <Login {...this.props} />
          <JoinNow />
          <Contact />
        </div>
      </div>
    );
  }
}

export default HomePage;