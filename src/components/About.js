import React from 'react';
import Divider from './Divider';

const About = (props) => {
  return (
    <div className="ui vertical stripe quote segment">
      <Divider title='ABOUT' />
      <div className="ui center aligned stackable grid container">
        <div className="center aligned row">
          <div className="eight wide column background-orange">
            <h3>"I shouldn't have gone with their competitor."</h3>
            <p>Lorem ipsum gypsum lorem ipsum gypsum lorem ipsum lorem ipsum gypsum Lorem ipsum gypsum lorem ipsum gypsum lorem ipsum lorem ipsum gypsum gypsum lorem ipsum lorem ipsum gypsum ipsum gypsum lorem ipsum gypsum lorem ipsum lorem ipsum gypsum gypsum lorem ipsum lorem ipsum gypsum</p>
          </div>
          <div className="eight wide column">
          <img className="ui centered medium circular image" alt={props.alt} src={props.image}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;