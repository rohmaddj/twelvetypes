import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button, Card, Image, Placeholder } from "semantic-ui-react";

import { signIn } from "../../actions/index";
import twelveType from "../../api/twelveType";
import Divider from "../child/Divider";

class MemberArea extends Component {
  state = {
    loading: true,
    purchased: false,
    downloadLink: "",
    archetype: localStorage.getItem("archetype") !== undefined ? localStorage.getItem("archetype") : "caregiver"
  };
  componentDidUpdate = async () => {
    window.scrollTo(0, 0);

    if (localStorage.getItem("authToken") === null) {
      this.props.history.push("/login");
    } else {
      if (this.state.loading) {
        try {
          const response = await twelveType.get("/user/checkProduct", {
            headers: {
              Authorization: "Bearer " + this.props.token
            }
          });
          this.setState({
            loading: false,
            downloadLink: response.data.response,
            purchased: response.data.response != null ? true : false
          });
          console.log(response);
        } catch (err) {
          this.setState({
            loading: false
          });
          console.log(err);
        }
      }
    }
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);

    if (localStorage.getItem("authToken") === null) {
      this.props.history.push("/login");
    } else {
      try {
        const response = await twelveType.get("/user/checkProduct", {
          headers: {
            Authorization: "Bearer " + this.props.token
          }
        });
        this.setState({
          loading: false,
          downloadLink: response.data.response,
          purchased: response.data.response != null ? true : false
        });
        console.log(response);
      } catch (err) {
        this.setState({
          loading: false
        });
        console.log(err);
      }
    }
  };

  handleLoadingClick = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="ui vertical stripe quote segment">
        <Divider title={`Welcome to your Library, `} username={this.props.username} />
        <div className="ui stackable grid container">
          <div className="row">
            <div className="sixteen wide column">
              <Card.Group doubling itemsPerRow={3} stackable>
                <Card key="npr">
                  {loading ? (
                    <Placeholder>
                      <Placeholder.Image square />
                    </Placeholder>
                  ) : (
                    <Image src={"https://api.individualogist.com/img/covers/" + this.state.archetype + ".png"} />
                  )}

                  <Card.Content>
                    {loading ? (
                      <Placeholder>
                        <Placeholder.Header>
                          <Placeholder.Line length="very short" />
                          <Placeholder.Line length="medium" />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                          <Placeholder.Line length="short" />
                        </Placeholder.Paragraph>
                      </Placeholder>
                    ) : (
                      <Fragment>
                        <Card.Header>Premium Archetype Profile</Card.Header>
                        <Card.Description>
                          {this.state.purchased
                            ? "Thank you for your purchase! You can now access your Premium Archetype Profile by clicking on the button below!"
                            : "You can purchase this item by clicking on the button below!"}
                        </Card.Description>
                      </Fragment>
                    )}
                  </Card.Content>

                  <Card.Content extra>
                    {this.state.purchased ? (
                      <a href={this.state.downloadLink} target="_blank" rel="noopener">
                        <Button disabled={loading}>Download</Button>
                      </a>
                    ) : (
                      <a
                        href={
                          `http://twelvetypes-test.individua1.pay.clickbank.net/?email=` +
                          this.props.email +
                          `&name=` +
                          this.props.username
                        }
                      >
                        <Button disabled={loading} primary>
                          Learn More
                        </Button>
                      </a>
                    )}
                  </Card.Content>
                </Card>
              </Card.Group>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    archetype: state.auth.archetype,
    username: state.auth.username,
    register: state.auth.register,
    token: state.auth.token,
    answers: state.quiz.answers,
    result: state.quiz.result,
    email: state.auth.email
  };
};

export default connect(mapStateToProps, { signIn })(MemberArea);
