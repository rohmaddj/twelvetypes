import React from "react"
import { connect } from "react-redux"
import twelveTypes from "../../api/twelveType"
import { Placeholder } from "semantic-ui-react"
import Divider from "../child/Divider"
import { addPersonalised } from "../../actions"

class PersonalisedPage extends React.Component {
  state = { listArchetype: [], placeholder: true }

  componentDidMount = () => {
    if (this.props.result.length > 0) {
      let tmp = []
      this.props.result.map(data => {
        tmp = [...tmp, Object.keys(data)[0]]
      })
      this.setState(
        {
          listArchetype: tmp
        },
        async () => {
          try {
            const response = await twelveTypes.get("/getPersonalised", {
              headers: {
                Authorization: "Bearer " + this.props.token
              },
              params: {
                archetype: this.state.listArchetype
              }
            })
            this.props.addPersonalised(response.data.data)
            this.setState({
              placeholder: false
            })
          } catch (error) {
            console.log(error)
          }
        }
      )
    } else {
    }
  }

  render() {
    return (
      <div className="ui vertical stripe quote segment">
        <Divider title="ARCHETYPE" />
        {this.state.placeholder ? (
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="sixteen wide column">
                <Placeholder fluid>
                  <Placeholder.Line length="very short" />
                  <Placeholder.Line length="very long" />
                  <Placeholder.Line length="long" />
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder>
                <Placeholder fluid>
                  <Placeholder.Line length="very short" />
                  <Placeholder.Line length="very long" />
                  <Placeholder.Line length="long" />
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder>
                <Placeholder fluid>
                  <Placeholder.Line length="very short" />
                  <Placeholder.Line length="very long" />
                  <Placeholder.Line length="long" />
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder>
                <Placeholder fluid>
                  <Placeholder.Line length="very short" />
                  <Placeholder.Line length="very long" />
                  <Placeholder.Line length="long" />
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder>
              </div>
            </div>
          </div>
        ) : (
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="sixteen wide column">
                <h3 className="ui header">{this.props.username},</h3>
                <p>
                  The archetypes forming your personality comprises an
                  incredibly unique combination, representing a harmonious
                  synergy between your primary traits: "
                  {this.props.personalised[0].p1}"
                </p>
              </div>
            </div>

            <div className="row">
              <div className="sixteen wide column">
                <h3 className="ui header">Strengths:</h3>
                <p>{this.props.personalised[0].p2}</p>
              </div>
            </div>

            <div className="row">
              <div className="sixteen wide column">
                <h3 className="ui header">Weaknesses:</h3>
                <p>{this.props.personalised[0].p3}</p>
              </div>
            </div>

            <div className="row">
              <div className="sixteen wide column">
                <h3 className="ui header">Goals:</h3>
                <p>{this.props.personalised[0].p4}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    result: state.quiz.result,
    personalised: state.quiz.personalised
  }
}

export default connect(
  mapStateToProps,
  { addPersonalised }
)(PersonalisedPage)
