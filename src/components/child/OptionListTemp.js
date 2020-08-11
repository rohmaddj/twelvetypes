import React from "react";
import { connect } from "react-redux";

class OptionList extends React.Component {
  render() {
    const options = this.props.option.map((option, i) => {
      return (
        <label className="containerq" key={option.id}>
          <input
            type="radio"
            checked={this.props.answers[this.props.questionId] === i}
            onChange={(evt) => this.props.onChangeAnswer(i, this.props.questionId)}
          />
          <span className="checkmark"></span>
          {option}
        </label>
      );
    });

    return <div className="options">{options}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    option: state.quiz.option,
  };
};

export default connect(mapStateToProps)(OptionList);
