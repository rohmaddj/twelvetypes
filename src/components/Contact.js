import React from 'react';
import Divider from './Divider';

const Contact = () => {
  return (
    <div className="ui vertical stripe quote segment">
      <Divider title="CONTACT US" text="Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered." />
      <div className="ui center aligned stackable grid container">
        <div className="center aligned row">
          <div className="eight wide column">
            <h3>"I shouldn't have gone with their competitor."</h3>
            <p>That is what they all say about us I shouldn't have gone with their competitor I shouldn't have gone with their competitor..</p>
          </div>
          <div className="eight wide column">
            <h3>"I shouldn't have gone with their competitor."</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
