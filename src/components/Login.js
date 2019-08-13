import React from 'react';
import Divider from './Divider';
import './style/HomePage.css';

const Login = () => {
  return (
    <div className="ui vertical stripe quote segment">
      <Divider title='LOGIN' />
      <div className="ui center aligned stackable grid container">
        <div className="row">
          <div className="eight wide column">
            <h3>Take a free quiz first?</h3>
            <p>That is what they all say about us I shouldn't have gone with their competitor I shouldn't have gone with their competitor..</p>
          </div>
          <div className="eight wide column background-orange">
            <h3>Already have an account?</h3>
            <div className="ui form">
              <div className="field">
                <div className="ui left icon input">
                  <input type="text" placeholder="Email" />
                  <i className="envelope icon"></i>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <input type="password" placeholder="Password" />
                  <i className="lock icon"></i>
                </div>
              </div>
              <div className="ui blue submit button">Login</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;