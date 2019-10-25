import React from 'react'
import { connect } from 'react-redux'
import PlaceholderQuiz from './placeholder/PlaceholderQuiz'

class ListQuiz extends React.Component {
  setChecked = (question, param) => {
    return 0 <= this.props.temp.indexOf(param)
  }

  render() {
    const questions = this.props.questions.map((question) => {
      return (
        <div className="question" key={question.id}>
          <div className="statement">
            {question.question}
          </div>
          <div className="decision">
            <div className="options">
              <div className={ this.props.mobile ? 'row' : 'ui grid' }>
                <div className="eight wide column">
                  <label className="containerq" >
                    <input type="checkbox"
                      onChange={evt => this.props.onChangeAnswer(question.answer_a.archetype, question.id)}
                      checked={
                       this.setChecked(question.id, question.answer_a.archetype)
                      }
                      />{question.answer_a.content}
                      <div className="ordered">
                      {this.props.temp.indexOf(question.answer_a.archetype) !== -1 ? this.props.temp.indexOf(question.answer_a.archetype)+1: ''}
                      </div>
                    <span className="checkmark"></span>
                  </label>
                  <label className="containerq" >
                    <input type="checkbox"
                      onChange={evt => this.props.onChangeAnswer(question.answer_b.archetype, question.id)}
                      checked={
                        this.setChecked(question.id, question.answer_b.archetype)
                      }
                    />{question.answer_b.content}
                    <div className="ordered">
                      {this.props.temp.indexOf(question.answer_b.archetype) !== -1 ? this.props.temp.indexOf(question.answer_b.archetype)+1: ''}
                      </div>
                    <span className="checkmark"></span>
                  </label>
                  <label className="containerq" >
                    <input type="checkbox"
                      onChange={evt => this.props.onChangeAnswer(question.answer_c.archetype, question.id)}
                      checked={
                        this.setChecked(question.id, question.answer_c.archetype)
                      }
                    />{question.answer_c.content}
                    <div className="ordered">
                      {this.props.temp.indexOf(question.answer_c.archetype) !== -1 ? this.props.temp.indexOf(question.answer_c.archetype)+1: ''}
                    </div>
                    <span className="checkmark"></span>
                  </label>
                  <label className="containerq" >
                    <input type="checkbox"
                      onChange={evt => this.props.onChangeAnswer(question.answer_d.archetype, question.id)}
                      checked={
                        this.setChecked(question.id, question.answer_d.archetype)
                      }
                    />{question.answer_d.content}
                    <div className="ordered">
                      {this.props.temp.indexOf(question.answer_d.archetype) !== -1 ? this.props.temp.indexOf(question.answer_d.archetype)+1: ''}
                    </div>
                    <span className="checkmark"></span>
                  </label>
                  <label className="containerq" >
                    <input type="checkbox"
                      onChange={evt => this.props.onChangeAnswer(question.answer_e.archetype, question.id)}
                      checked={
                        this.setChecked(question.id, question.answer_e.archetype)
                      }
                    />{question.answer_e.content}
                    <div className="ordered">
                      {this.props.temp.indexOf(question.answer_e.archetype) !== -1 ? this.props.temp.indexOf(question.answer_e.archetype)+1: ''}
                    </div>
                    <span className="checkmark"></span>
                  </label>
                  <label className="containerq" >
                    <input type="checkbox"
                      onChange={evt => this.props.onChangeAnswer(question.answer_f.archetype, question.id)}
                      checked={
                        this.setChecked(question.id, question.answer_f.archetype)
                      }
                    />{question.answer_f.content}
                    <div className="ordered">
                      {this.props.temp.indexOf(question.answer_f.archetype) !== -1 ? this.props.temp.indexOf(question.answer_f.archetype)+1: ''}
                    </div>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="eight wide column">
                  <label className="containerq" >
                    <input type="checkbox"
                      onChange={evt => this.props.onChangeAnswer(question.answer_g.archetype, question.id)}
                      checked={
                        this.setChecked(question.id, question.answer_g.archetype)
                      }
                    />{question.answer_g.content}
                    <div className="ordered">
                      {this.props.temp.indexOf(question.answer_g.archetype) !== -1 ? this.props.temp.indexOf(question.answer_g.archetype)+1: ''}
                    </div>
                    <span className="checkmark"></span>
                  </label>
                  <label className="containerq" >
                    <input type="checkbox"
                      onChange={evt => this.props.onChangeAnswer(question.answer_h.archetype, question.id)}
                      checked={
                        this.setChecked(question.id, question.answer_h.archetype)
                      }
                    />{question.answer_h.content}
                    <div className="ordered">
                      {this.props.temp.indexOf(question.answer_h.archetype) !== -1 ? this.props.temp.indexOf(question.answer_h.archetype)+1: ''}
                    </div>
                    <span className="checkmark"></span>
                  </label>
                  <label className="containerq" >
                    <input type="checkbox"
                      onChange={evt => this.props.onChangeAnswer(question.answer_i.archetype, question.id)}
                      checked={
                        this.setChecked(question.id, question.answer_i.archetype)
                      }
                    />{question.answer_i.content}
                    <div className="ordered">
                      {this.props.temp.indexOf(question.answer_i.archetype) !== -1 ? this.props.temp.indexOf(question.answer_i.archetype)+1: ''}
                    </div>
                    <span className="checkmark"></span>
                  </label>
                  <label className="containerq" >
                    <input type="checkbox"
                      onChange={evt => this.props.onChangeAnswer(question.answer_j.archetype, question.id)}
                      checked={
                        this.setChecked(question.id, question.answer_j.archetype)
                      }
                    />{question.answer_j.content}
                    <div className="ordered">
                      {this.props.temp.indexOf(question.answer_j.archetype) !== -1 ? this.props.temp.indexOf(question.answer_j.archetype)+1: ''}
                    </div>
                    <span className="checkmark"></span>
                  </label>
                  <label className="containerq" >
                    <input type="checkbox"
                      onChange={evt => this.props.onChangeAnswer(question.answer_k.archetype, question.id)}
                      checked={
                        this.setChecked(question.id, question.answer_k.archetype)
                      }
                    />{question.answer_k.content}
                    <div className="ordered">
                      {this.props.temp.indexOf(question.answer_k.archetype) !== -1 ? this.props.temp.indexOf(question.answer_k.archetype)+1: ''}
                    </div>
                    <span className="checkmark"></span>
                  </label>
                  <label className="containerq" >
                    <input type="checkbox"
                      onChange={evt => this.props.onChangeAnswer(question.answer_l.archetype, question.id)}
                      checked={
                        this.setChecked(question.id, question.answer_l.archetype)
                      }
                    />{question.answer_l.content}
                    <div className="ordered">
                      {this.props.temp.indexOf(question.answer_l.archetype) !== -1 ? this.props.temp.indexOf(question.answer_l.archetype)+1: ''}
                    </div>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="five wide column">
              {question.id === 10 ? <button className="ui huge button" onClick={evt => this.props.onNextButton(question.id + 1)}>SUBMIT <i className="caret square right icon"></i></button>
              :
              <button className="ui huge button" disabled={this.props.temp.length === 3 ? false : true} onClick={evt => this.props.onNextButton(question.id + 1)}>NEXT <i className="caret square right icon"></i></button>
              }
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="questions-area">
        <div className="test-questions comp">
        { this.props.placeholder ?
          <PlaceholderQuiz mobile={this.props.mobile} />
          :
          questions
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    questions: state.quiz.questions,
    answers: state.quiz.answers,
    temp: state.quiz.temp
  }
}

export default connect(
mapStateToProps
)(ListQuiz);