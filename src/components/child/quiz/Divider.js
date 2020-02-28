import React from "react";

const Divider = props => {
  return (
    <div className="ui container">
      <h3 className="ui horizontal new-divider text-question">
        {props.title} <span>{props.username}</span>
      </h3>
      <p className="question-hint">Select <strong>3 options</strong> <em>(1 is the most important, followed by 2 and 3)</em></p>
      <p className="text-divider">{props.text}</p>
      <div className="line-divider"></div>
    </div>
  );
};

Divider.defaultProps = {
  title: "PLEASE SEND ME PROPS :)",
  text: ""
};

export default Divider;
