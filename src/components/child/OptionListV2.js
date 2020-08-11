import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Checkbox, Grid } from "semantic-ui-react";

class OptionListV2 extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const options = this.props.option.map((option, i) => {
      return (
        <Grid.Column key={i}>
          <Form.Field>
            <Checkbox
              radio
              label={option}
              name="optionAnswer"
              value={i}
              checked={this.props.tmpControl === i}
              onChange={(evt) => this.props.onChangeAnswer(i, this.props.questionId)}
            />
          </Form.Field>
        </Grid.Column>
      );
    });
    return (
      <Form>
        <Grid relaxed columns={5}>
          {options}
        </Grid>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    option: state.quiz.option,
    tmpControl: state.quiz.tmpControl,
  };
};

export default connect(mapStateToProps)(OptionListV2);
