import React from "react";
import { connect } from "react-redux";
import PlaceholderQuiz from "./placeholder/PlaceholderQuiz";
import Divider from "./quiz/Divider";
import "../../assets/style/quiz.css";
import OptionListV2 from "./OptionListV2";

class Question extends React.Component {
  setChecked = (question, param) => {
    return 0 <= this.props.temp.indexOf(param);
  };

  renderOption() {
    return (
      <div className="decision">
        {/* <OptionList
          questionId={this.props.question.id}
          onChangeAnswer={this.props.onChangeAnswer}
          answers={this.props.answers}
        /> */}
        <OptionListV2 questionId={this.props.question.id} onChangeAnswer={this.props.onChangeAnswer} />
      </div>
    );
  }

  renderQuestion() {
    return (
      <div className="question" key={this.props.question.id}>
        <Divider title={this.props.question.content}></Divider>
        {this.renderOption()}
        <div className="row">
          <div className="five wide column">
            {this.props.question.id === 32 ? (
              <button
                className="ui huge button submit-button"
                onClick={(evt) => this.props.onNextButton(this.props.question.id + 1)}
                //onClick={(evt) => this.props.onSubmitButton()}
              >
                SUBMIT
              </button>
            ) : (
              <button
                className="ui huge button rounded-button"
                //disabled={this.props.temp.length === 3 ? false : true}
                onClick={(evt) => this.props.onNextButton(this.props.question.id + 1, this.props.question.id)}
              >
                NEXT
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="questions-area">
        <div className="test-questions comp">
          {this.props.placeholder ? <PlaceholderQuiz mobile={this.props.mobile} /> : this.renderQuestion()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    question: state.quiz.question,
    option: state.quiz.option,
    answers: state.quiz.answers,
    temp: state.quiz.temp,
  };
};

export default connect(mapStateToProps)(Question);
