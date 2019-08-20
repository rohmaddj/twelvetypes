import React from 'react';
import Divider from './Divider';

const Contact = () => {
  return (
    <div className="ui vertical stripe quote segment">
      <Divider title="CONTACT US" text="Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered." />
      <div className="ui center aligned stackable grid container">
        <div className="center aligned row">
          <div className="eight wide column background-orange form">
            <div className="ui form">
              <div className="field">
                <label>Name:</label>
                <div className="ui left icon input">
                  <input type="text" placeholder="your name" />
                  <i className="user icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Email:</label>
                <div className="ui left icon input">
                  <input type="email" placeholder="your@mail.com" />
                  <i className="envelope icon"></i>
                </div>
              </div>
              <div className="field">
                <label>Message:</label>
                <div className="ui left icon input">
                  <textarea type="text" placeholder="Message" />
                </div>
              </div>
              <div className="ui huge submit button">SEND</div>
            </div>
          </div>
          <div className="eight wide column outlaw">
            <div className="contain">
              <div className="background-toska">
                <h3>www.twelvetypes.com</h3>
                <p>contact@twelvetypes.com</p>
              </div>
              <button className="ui huge button social">
                <i className="facebook f icon"></i>
              </button>
              <button className="ui huge button social">
                <i className="instagram icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
