import React from "react";
import { connect } from "react-redux";
import PlaceholderQuiz from "./placeholder/PlaceholderQuiz";
import Divider from "./quiz/Divider";
import "../../assets/style/quiz.css";
import { Grid } from "semantic-ui-react";

class ListQuiz extends React.Component {
  setChecked = (question, param) => {
    return 0 <= this.props.temp.indexOf(param);
  };

  render() {
    // const answers = question => {
    //   let answers = [];
    //   for (let i = 0; i < 11; i++) {
    //     answers.push(
    //       <Grid.Column width={8}>
    //         <div className="inputGroup">
    //           <input
    //             type="checkbox"
    //             id={"option_" + (i + 10).toString(36)}
    //             name={"option_" + (i + 10).toString(36)}
    //             onChange={evt =>
    //               this.props.onChangeAnswer(question.answer_ + (i + 10).toString(36).archetype, question.id)
    //             }
    //             checked={this.setChecked(question.id, question.answer_ + (i + 10).toString(36).archetype)}
    //           />
    //           <div className="order-number">
    //             {this.props.temp.indexOf(question.answer_ + (i + 10).toString(36).archetype) !== -1
    //               ? this.props.temp.indexOf(question.answer_ + (i + 10).toString(36).archetype) + 1
    //               : ""}
    //           </div>
    //           <label for={"option_" + (i + 10).toString(36)}>{question.answer_ + (i + 10).toString(36).content}</label>
    //         </div>
    //       </Grid.Column>
    //     );
    //   }

    //   return answers;
    // };

    const questions = this.props.questions.map(question => {
      return (
        <div className="question" key={question.id}>
          <Divider title={question.question}></Divider>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <div className="inputGroup">
                  <input
                    type="checkbox"
                    id="option_a"
                    name="option_a"
                    onChange={evt => this.props.onChangeAnswer(question.answer_a.archetype, question.id)}
                    checked={this.setChecked(question.id, question.answer_a.archetype)}
                  />
                  <label htmlFor="option_a">
                    <div className="order-number">
                      {this.props.temp.indexOf(question.answer_a.archetype) !== -1
                        ? this.props.temp.indexOf(question.answer_a.archetype) + 1
                        : ""}
                    </div>
                    <p className="qn-opt">{question.answer_a.content}</p>
                  </label>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="inputGroup">
                  <input
                    type="checkbox"
                    id="option_b"
                    name="option_b"
                    onChange={evt => this.props.onChangeAnswer(question.answer_b.archetype, question.id)}
                    checked={this.setChecked(question.id, question.answer_b.archetype)}
                  />
                  <label htmlFor="option_b">
                    <div className="order-number">
                      {this.props.temp.indexOf(question.answer_b.archetype) !== -1
                        ? this.props.temp.indexOf(question.answer_b.archetype) + 1
                        : ""}
                    </div>
                    <p className="qn-opt">{question.answer_b.content}</p>
                  </label>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="inputGroup">
                  <input
                    type="checkbox"
                    id="option_c"
                    name="option_c"
                    onChange={evt => this.props.onChangeAnswer(question.answer_c.archetype, question.id)}
                    checked={this.setChecked(question.id, question.answer_c.archetype)}
                  />
                  <label htmlFor="option_c">
                    <div className="order-number">
                      {this.props.temp.indexOf(question.answer_c.archetype) !== -1
                        ? this.props.temp.indexOf(question.answer_c.archetype) + 1
                        : ""}
                    </div>
                    <p className="qn-opt">{question.answer_c.content}</p>
                  </label>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="inputGroup">
                  <input
                    type="checkbox"
                    id="option_d"
                    name="option_d"
                    onChange={evt => this.props.onChangeAnswer(question.answer_d.archetype, question.id)}
                    checked={this.setChecked(question.id, question.answer_d.archetype)}
                  />
                  <label htmlFor="option_d">
                    <div className="order-number">
                      {this.props.temp.indexOf(question.answer_d.archetype) !== -1
                        ? this.props.temp.indexOf(question.answer_d.archetype) + 1
                        : ""}
                    </div>
                    <p className="qn-opt">{question.answer_d.content}</p>
                  </label>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="inputGroup">
                  <input
                    type="checkbox"
                    id="option_e"
                    name="option_e"
                    onChange={evt => this.props.onChangeAnswer(question.answer_e.archetype, question.id)}
                    checked={this.setChecked(question.id, question.answer_e.archetype)}
                  />
                  <label htmlFor="option_e">
                    <div className="order-number">
                      {this.props.temp.indexOf(question.answer_e.archetype) !== -1
                        ? this.props.temp.indexOf(question.answer_e.archetype) + 1
                        : ""}
                    </div>
                    <p className="qn-opt">{question.answer_e.content}</p>
                  </label>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="inputGroup">
                  <input
                    type="checkbox"
                    id="option_f"
                    name="option_f"
                    onChange={evt => this.props.onChangeAnswer(question.answer_f.archetype, question.id)}
                    checked={this.setChecked(question.id, question.answer_f.archetype)}
                  />
                  <label htmlFor="option_f">
                    <div className="order-number">
                      {this.props.temp.indexOf(question.answer_f.archetype) !== -1
                        ? this.props.temp.indexOf(question.answer_f.archetype) + 1
                        : ""}
                    </div>
                    <p className="qn-opt">{question.answer_f.content}</p>
                  </label>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="inputGroup">
                  <input
                    type="checkbox"
                    id="option_g"
                    name="option_g"
                    onChange={evt => this.props.onChangeAnswer(question.answer_g.archetype, question.id)}
                    checked={this.setChecked(question.id, question.answer_g.archetype)}
                  />
                  <label htmlFor="option_g">
                    <div className="order-number">
                      {this.props.temp.indexOf(question.answer_g.archetype) !== -1
                        ? this.props.temp.indexOf(question.answer_g.archetype) + 1
                        : ""}
                    </div>
                    <p className="qn-opt">{question.answer_g.content}</p>
                  </label>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="inputGroup">
                  <input
                    type="checkbox"
                    id="option_h"
                    name="option_h"
                    onChange={evt => this.props.onChangeAnswer(question.answer_h.archetype, question.id)}
                    checked={this.setChecked(question.id, question.answer_h.archetype)}
                  />
                  <label htmlFor="option_h">
                    <div className="order-number">
                      {this.props.temp.indexOf(question.answer_h.archetype) !== -1
                        ? this.props.temp.indexOf(question.answer_h.archetype) + 1
                        : ""}
                    </div>
                    <p className="qn-opt">{question.answer_h.content}</p>
                  </label>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="inputGroup">
                  <input
                    type="checkbox"
                    id="option_i"
                    name="option_i"
                    onChange={evt => this.props.onChangeAnswer(question.answer_i.archetype, question.id)}
                    checked={this.setChecked(question.id, question.answer_i.archetype)}
                  />
                  <label htmlFor="option_i">
                    <div className="order-number">
                      {this.props.temp.indexOf(question.answer_i.archetype) !== -1
                        ? this.props.temp.indexOf(question.answer_i.archetype) + 1
                        : ""}
                    </div>
                    <p className="qn-opt">{question.answer_i.content}</p>
                  </label>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="inputGroup">
                  <input
                    type="checkbox"
                    id="option_j"
                    name="option_j"
                    onChange={evt => this.props.onChangeAnswer(question.answer_j.archetype, question.id)}
                    checked={this.setChecked(question.id, question.answer_j.archetype)}
                  />
                  <label htmlFor="option_j">
                    <div className="order-number">
                      {this.props.temp.indexOf(question.answer_j.archetype) !== -1
                        ? this.props.temp.indexOf(question.answer_j.archetype) + 1
                        : ""}
                    </div>
                    <p className="qn-opt">{question.answer_j.content}</p>
                  </label>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="inputGroup">
                  <input
                    type="checkbox"
                    id="option_k"
                    name="option_k"
                    onChange={evt => this.props.onChangeAnswer(question.answer_k.archetype, question.id)}
                    checked={this.setChecked(question.id, question.answer_k.archetype)}
                  />
                  <label htmlFor="option_k">
                    <div className="order-number">
                      {this.props.temp.indexOf(question.answer_k.archetype) !== -1
                        ? this.props.temp.indexOf(question.answer_k.archetype) + 1
                        : ""}
                    </div>
                    <p className="qn-opt">{question.answer_k.content}</p>
                  </label>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div className="inputGroup">
                  <input
                    type="checkbox"
                    id="option_l"
                    name="option_l"
                    onChange={evt => this.props.onChangeAnswer(question.answer_l.archetype, question.id)}
                    checked={this.setChecked(question.id, question.answer_l.archetype)}
                  />
                  <label htmlFor="option_l">
                    <div className="order-number">
                      {this.props.temp.indexOf(question.answer_l.archetype) !== -1
                        ? this.props.temp.indexOf(question.answer_l.archetype) + 1
                        : ""}
                    </div>
                    <p className="qn-opt">{question.answer_l.content}</p>
                  </label>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="row">
            <div className="five wide column">
              {question.id === 10 ? (
                <button
                  className="ui huge button submit-button"
                  onClick={evt => this.props.onNextButton(question.id + 1)}
                >
                  SUBMIT
                </button>
              ) : (
                <button
                  className="ui huge button rounded-button"
                  disabled={this.props.temp.length === 3 ? false : true}
                  onClick={evt => this.props.onNextButton(question.id + 1)}
                >
                  NEXT
                </button>
              )}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="questions-area">
        <div className="test-questions comp">
          {this.props.placeholder ? <PlaceholderQuiz mobile={this.props.mobile} /> : questions}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    questions: state.quiz.questions,
    answers: state.quiz.answers,
    temp: state.quiz.temp
  };
};

export default connect(mapStateToProps)(ListQuiz);
