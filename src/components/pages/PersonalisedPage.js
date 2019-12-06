import React from "react";
import { connect } from "react-redux";
import twelveTypes from "../../api/twelveType";
import { Placeholder, Image, Container, Header } from "semantic-ui-react";
import Divider from "../child/Divider";
import { Link } from "react-router-dom";
import { addPersonalised } from "../../actions";

class PersonalisedPage extends React.Component {
  state = { listArchetype: [], placeholder: true };

  componentDidMount = () => {
    if (this.props.result.length > 0) {
      let tmp = [];
      this.props.result.map(data => {
        tmp = [...tmp, Object.keys(data)[0]];
      });
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
            });
            this.props.addPersonalised(response.data.data);
            this.setState({
              placeholder: false
            });
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }
      );
    } else {
    }
  };

  render() {
    const archetypes = this.props.personalised.map(archetype => {
      return (
        <Container key={archetype.archetype}>
          <Header as="h2" className={archetype.archetype}>
            <Image
              src={`https://individualogist.com/wp-content/themes/indivi-wp/img/icons/${archetype.archetype}.webp`}
            />
            <Header.Content>Your {archetype.archetype} Archetype</Header.Content>
          </Header>
          <div class="left-line">
            <h3 className="ui header">Strengths:</h3>
            <p>{archetype.p2}</p>
            <h3 className="ui header">Weaknesses:</h3>
            <p>{archetype.p3}</p>
            <h3 className="ui header">Goals:</h3>
            <p>{archetype.p4}</p>
          </div>
        </Container>
      );
    });

    return (
      <div className="ui vertical stripe quote segment">
        <Divider title="ARCHETYPE RESULTS" />
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
                <h3 className="ui header">Hi {this.props.username}, here are your personalised results:</h3>
              </div>
            </div>
            {archetypes}
            <div className="ui centered column row remove-padding">
              <Link to="/archetype-details" className="ui huge submit button custom-background-orange">
                Continue
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    result: state.quiz.result,
    personalised: state.quiz.personalised
  };
};

export default connect(
  mapStateToProps,
  { addPersonalised }
)(PersonalisedPage);
