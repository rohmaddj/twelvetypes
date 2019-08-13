import React from 'react';

const Divider = props => {
  return (
    <div className="ui text center aligned container">
      <h3 className="ui horizontal divider header">
        {props.title}
      </h3>
      <p>{props.text}</p>
    </div>
  );
}

Divider.defaultProps = {
  title: 'PLEASE SEND ME PROPS :)',
  text: ''
}

export default Divider;