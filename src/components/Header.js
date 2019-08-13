import React from 'react';

const Header = () => {
  return (
    <div className="ui inverted segment">

      <div className="ui inverted secondary menu">
        <a href="#sample" className="toc item">
          <i className="sidebar icon"></i>
        </a>
        <div className="item">
          <img src="https://semantic-ui.com/images/logo.png" alt="sample alt" />
        </div>
        <div className="right item">
          <a className="item" href="#sample">
            ABOUT
          </a>
          <a className="item" href="#sample">
            ARCHETYPE
          </a>
          <a className="item" href="#sample">
            CONTACT
          </a>
          <a className="item" href="#sample">
            LOGIN
          </a>
          <a className="b-special ui huge button" href="#sample">
            TAKE THE QUIZ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;