import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import twelveType from '../../api/twelveType';
import Divider from '../child/Divider';
import { updateUser } from '../../actions/index';
import faker from 'faker';

class DashboardPage extends React.Component {
  componentDidMount = async () => {
    window.scrollTo(0, 0)

    if(this.props.isSignedIn === false) {
      this.props.history.push('/login')
    } else if (this.props.archetype === "" && this.props.answers.length > 0) {
      try {
        const response = await twelveType.get('/user/quiz-result', {
          headers: {
            Authorization: 'Bearer ' + this.props.token
          },
          params:  {
            result: Object.values(this.props.answers) }
        });
        console.log(response)
        this.props.updateUser(response.data.user.name, response.data.user.archetype, this.props.token)
      } catch {
        console.log('error bro');
      }
    }
  }

  onRetakeQuiz = () => {
    this.props.updateUser(this.props.username, "", this.props.token)
    this.props.history.push('/quiz')
  }

  render() {
    return (
      <div className="ui vertical stripe quote segment">
        <Divider title='DASHBOARD' />
        <div className="ui container">
          <div className="ui divided items">
            <div className="item">
              <div className="image">
                <img alt="people" src={faker.image.avatar()} />
              </div>
              <div className="content">
                <Link className="header" to="/dashboard">{this.props.username}</Link>
                <div className="meta">
                  <span className="cinema">{this.props.archetype}</span>
                </div>
                <div className="description">
                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                </div>
                <div className="extra">
                  <div onClick={() => this.onRetakeQuiz()} className="ui right floated primary button">
                    Re-Take a quiz
                    <i className="right chevron icon"></i>
                  </div>
                  <div className="ui label">User</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    archetype: state.auth.archetype,
    username: state.auth.username,
    token: state.auth.token,
    answers: state.quiz.answers,
  }
}

export default connect(
  mapStateToProps, {
    updateUser
  }
)(DashboardPage);