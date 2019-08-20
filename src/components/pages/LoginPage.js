import React from 'react';
import Login from '../child/Login';
import JoinNow from '../child/JoinNow';

const LoginPage = (props) => {
  return (
    <div className="ui container">
      <Login {...props}/>
      <JoinNow />
    </div>
  );
}

export default LoginPage;