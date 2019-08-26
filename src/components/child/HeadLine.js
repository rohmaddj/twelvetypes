import React from 'react';
import { Link } from 'react-router-dom';

const HeadLine = () => {
  return (
    <div className="ui vertical stripe segment">
    <div className="ui center aligned stackable grid container">
      <div className="row">
        <div className="ten wide column">
          <h3 className="ui header">Which type are you?</h3>
          <p>Take our Personality Test and get "freakishly accurate" description of who you are and why you do the things the way you do.</p>
        </div>
        <div className="five wide column">
          <Link className="ui huge button" to="/quiz">TAKE THE QUIZ <i className="caret square right icon"></i></Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default HeadLine;