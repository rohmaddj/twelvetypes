import React from 'react';
import Divider from './Divider';
import logo from '../../assets/images/logo/logo-color.png';

const About = (props) => {
  return (
    <div className="ui vertical stripe quote segment">
      <Divider title='ABOUT' />
      <div className="ui center aligned stackable grid container">
        <div className="center aligned row">
          <div className="seven wide column background-orange">
            <h3>"I shouldn't have gone with their competitor."</h3>
            <p>Lorem ipsum gypsum lorem ipsum gypsum lorem ipsum lorem ipsum gypsum Lorem ipsum gypsum lorem ipsum gypsum lorem ipsum lorem ipsum gypsum gypsum lorem ipsum lorem ipsum gypsum ipsum gypsum lorem ipsum gypsum lorem ipsum lorem ipsum gypsum gypsum lorem ipsum lorem ipsum gypsum</p>
          </div>
          <div className="seven wide column explorer">
            <div className="content inside background">
              <img alt="TwelveTypes Logo" src={logo} />
            </div>
          </div>
        </div>
        { props.detail ?
        <div className="center aligned row">
          <div className="twelve wide column background-orange">
            <p>Lorem ipsum gypsum lorem ipsum gypsum lorem ipsum lorem ipsum gypsum Lorem ipsum gypsum lorem ipsum gypsum lorem ipsum lorem ipsum gypsum gypsum lorem ipsum lorem ipsum gypsum ipsum gypsum lorem ipsum gypsum lorem ipsum lorem ipsum gypsum gypsum lorem ipsum lorem ipsum gypsum</p>
          </div>
        </div>
        : '' }
      </div>
    </div>
  );
};

export default About;