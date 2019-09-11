import React from 'react'
import twelveType from '../../api/twelveType'
import Divider from  '../child/Divider'
import { connect } from 'react-redux'
import { storeResult } from '../../actions'

class DemoResultPage extends React.Component {
  componentDidMount = async () => {
    window.scrollTo(0, 0)
    const response = await twelveType.get('/quizResult', {
      params: { answers: this.props.answers }
    });
    console.log(response)
    this.props.storeResult(response.data.percentage)
  }

  render() {
    const results = []
    this.props.results.map((result, i) => {
      var resultKey = Object.keys(result)
      results.push(
        <div className="ui labeled button" key={i}>
          <div className="ui basic blue button">
            {resultKey[0]}
          </div>
          <span className="ui basic left pointing blue label">
            {result[resultKey[0]]}
          </span>
        </div>
      )
    })

    return (
      <div className="ui vertical stripe quote segment">
        <div>
          <Divider title="QUIZ RESULT" text="Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem Lorem ipsum genesis ipsum lorem"/>
          <div className="ui center aligned grid container">
            {results}
          </div>
        </div>
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
    answers: state.quiz.answers,
    results: state.quiz.result
  }
}
export default connect(mapStateToProps, { storeResult })(DemoResultPage)