import React from 'react';

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
          <a className="ui huge button" href="#sample">TAKE THE QUIZ <i className="caret square right icon"></i></a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default HeadLine;