import React from 'react';
import twelveType from '../../api/twelveType';
import DemoQuiz from '../child/DemoQuiz';
import { connect } from 'react-redux';
import { addQuiz, addAnswers, addTemp, resetTemp, changeTemp } from '../../actions';

class DemoPage extends React.Component {

  componentDidMount = async () => {
    window.scrollTo(0, 0)
    const response = await twelveType.get('/quiz', {
      params: { id: 1 }
    });
    this.props.addQuiz(response.data.question)
  }

  onInputChange = (answer, question) => {
      const changeAnswer = this.props.temp.indexOf(answer)
      console.log(changeAnswer)
      if(changeAnswer !== -1) {
        this.props.changeTemp(answer) // mutable redux
      }else{
        if(this.props.temp.length >= 3){
          alert('oh no, you already choose three answer')
        }else{
          this.props.addTemp(answer)
        }
      }
    }

  onNextButton = async (id) => {
    window.scrollTo(0, 0)
    const response = await twelveType.get('/quiz', {
      params: { id: id }
    });
    this.props.addQuiz(response.data.question)
    this.props.addAnswers(this.props.temp)
    this.props.resetTemp()

    if(id > 10){
      this.props.history.push('/demo-result')
    }
  }

  render() {
    return (
      <div className="ui center aligned vertical stripe quote segment">
        <DemoQuiz onChangeAnswer={this.onInputChange} onNextButton={this.onNextButton}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    username: state.auth.username,
    archetype: state.auth.archetype,
    token: state.auth.token,
    temp: state.quiz.temp
  }
}

export default connect(
  mapStateToProps,
  { addQuiz, addAnswers, addTemp, resetTemp, changeTemp }
)(DemoPage);