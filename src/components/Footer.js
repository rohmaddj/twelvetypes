import React from 'react';

const Footer = () => {
  return (
    <div className="ui vertical stripe segment">
      <div className="ui footer center aligned stackable grid container">
        <div className="ui text center container">
          <img alt="TwelveTypes Logo"/>
          <p>Lorem ipsum color nitro ipsum color netro ipsum color netro ipsum color netro ipsum color netro</p>
        </div>
        <div className="ui celled horizontal list">
          <div className="item">About Us</div>
          <div className="item">About Us</div>
          <div className="item">Contact</div>
          <div className="item">Support</div>
          <div className="item">About Us</div>
          <div className="item">About Us</div>
          <div className="item">About Us</div>
        </div>
        <div className="ui text center container">
          Copyright 2019 TwelveTypes.com
        </div>
      </div>
    </div>
  );
}

export default Footer;