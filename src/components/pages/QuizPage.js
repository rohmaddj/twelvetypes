import React from 'react';
import twelveType from '../../api/twelveType';
import ListQuiz from '../child/ListQuiz';
import { Progress, Modal, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addQuiz, addAnswers, addTemp, resetTemp, changeTemp } from '../../actions';

class QuizPage extends React.Component {
  state = { percent: 0, open: false }

  show = (size) => this.setState({ size, open: true }) // open modal configuration
  close = () => this.setState({ open: false }) // close modal configuration

  componentDidMount = async () => {

    window.scrollTo(0, 0)
    const response = await twelveType.get('/quizQuestion', {
      params: { id: 1 }
    });
    this.props.addQuiz(response.data.question)
  }

  onInputChange = (answer, question) => {
      const changeAnswer = this.props.temp.indexOf(answer)
      if(changeAnswer !== -1) {
        this.props.changeTemp(answer) // mutable redux
      }else{
        if(this.props.temp.length >= 3){
          this.show('mini') // showing modal
        }else{
          this.props.addTemp(answer)
        }
      }
    }

  onNextButton = async (id) => {
    window.scrollTo(0, 0)
    const response = await twelveType.get('/quizQuestion', {
      params: { id: id }
    });
    this.props.addQuiz(response.data.question)
    this.props.addAnswers(this.props.temp)
    this.props.resetTemp()

    this.setState((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 10,
    }))

    if(id > 4){
      this.props.history.push('/register')
    }
  }

  render() {
    const { open, size } = this.state
    return (
      <div className="ui center aligned vertical stripe quote segment">
        <Progress percent={this.state.percent} indicating progress/>
        <ListQuiz onChangeAnswer={this.onInputChange.bind(this)} onNextButton={this.onNextButton}/>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>Notification</Modal.Header>
          <Modal.Content>
            <p>Sorry, you already choose top three answers</p>
          </Modal.Content>
          <Modal.Actions>
            <Button positive onClick={this.close.bind()}>Okay</Button>
            {/* <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='Yes'
            /> */}
          </Modal.Actions>
        </Modal>
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
)(QuizPage);