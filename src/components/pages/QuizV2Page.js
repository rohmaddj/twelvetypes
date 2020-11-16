import React from "react";
import twelveType from "../../api/twelveType";
import Question from "../child/Question";
import { Progress, Modal, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  addQuiz,
  addAnswers,
  addTemp,
  resetTemp,
  changeTemp,
  addQuestion,
  addTmpControl,
  resetTmpControl,
} from "../../actions";

class QuizV2Page extends React.Component {
  state = { percent: 0, open: false, mobile: false, placeholder: true };

  show = (size) => this.setState({ size, open: true }); // open modal configuration
  close = () => this.setState({ open: false }); // close modal configuration

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const response = await twelveType.get("/question", {
      params: { id: 1 },
    });
    this.setState({
      placeholder: false,
    });

    if (window.innerWidth <= 800 && window.innerHeight <= 800) {
      this.setState({
        mobile: true,
      });
    }
    this.props.addQuestion(response.data.question, response.data.option);
  };

  onInputChange = (answer, question) => {
    // const changeAnswer = this.props.temp.indexOf(answer);
    // const tmp = {};
    // tmp[question] = answer;
    // if (changeAnswer !== -1) {
    //   this.props.changeTemp(answer); // mutable redux
    // } else {
    //   if (this.props.temp.length >= 3) {
    //     this.show("mini"); // showing modal
    //   } else {
    //     this.props.addTemp(tmp);
    //   }
    // }
    console.log(answer + " " + question);
    this.props.addTmpControl(answer);
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.temp.length !== this.props.temp.length) {
      window.scrollTo({ top: 200, behavior: "smooth" });
      // if (this.props.temp.length === 3) {
      //   window.scrollTo({ top: 200, behavior: "smooth" });
      // }
    }
  };

  onNextButton = async (id, questionNumber) => {
    this.props.addTemp(this.props.tmpControl);
    this.props.resetTmpControl();
    const temp = [...this.props.temp, this.props.tmpControl]; // update temp special

    if (temp.length === 40) {
      this.props.addAnswers(temp);
      this.props.history.push("/register");
    } else {
      const response = await twelveType.get("/question", {
        params: { id: id },
      });
      this.props.addQuestion(response.data.question, response.data.option);
    }

    this.setState(
      {
        placeholder: true,
      },
      () => window.scrollTo({ top: 0, behavior: "smooth" })
    );
    //this.props.addQuiz(response.data.question);
    // this.props.addAnswers(this.props.temp);
    // this.props.resetTemp();
    // const tmp = {};
    // tmp[questionNumber] = this.props.tmpControl;

    this.setState((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 2.5,
      placeholder: false,
    }));
  };

  render() {
    const { open, size } = this.state;
    return (
      <div className="ui center aligned vertical stripe quote segment">
        <Progress percent={this.state.percent} indicating progress className="progress-custom" />
        {/* <ListQuiz
          onChangeAnswer={this.onInputChange.bind(this)}
          onNextButton={this.onNextButton}
          mobile={this.state.mobile}
          placeholder={this.state.placeholder}
        /> */}
        <Question
          onChangeAnswer={this.onInputChange.bind(this)}
          onNextButton={this.onNextButton}
          onSubmitButton={this.onSubmitButton}
          mobile={this.state.mobile}
          placeholder={this.state.placeholder}
        ></Question>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>You can only select three options!</Modal.Header>
          <Modal.Content>
            <p>You can click/tap on an existing selection to de-select it</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close.bind()}>Okay</Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    username: state.auth.username,
    archetype: state.auth.archetype,
    token: state.auth.token,
    temp: state.quiz.temp,
    tmpControl: state.quiz.tmpControl,
  };
};

export default connect(mapStateToProps, {
  addQuiz,
  addAnswers,
  addTemp,
  resetTemp,
  changeTemp,
  addQuestion,
  addTmpControl,
  resetTmpControl,
})(QuizV2Page);
