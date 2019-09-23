import React from 'react';
import Divider from './Divider';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import twelveType from '../../api/twelveType';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  state = { email: '', name: '', password: '', inFetch: false }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onInputChange = (event, type) => {
    if(type === 'email') {
      this.setState({
        email: event.target.value
      })
    } else if(type === 'name') {
      this.setState({
        name: event.target.value
      })
    } else {
      this.setState({
        password: event.target.value
      })
    }
  }

  onSubmit = async () => {
    this.setState({ inFetch: true });
    try {
      const response = await twelveType.post('/register', {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })

      var archetype = '';
      if(response.data.user.archetype !== '') {
        archetype = JSON.parse(response.data.user.archetype)
      }
      console.log(response)
      localStorage.setItem('authToken', response.data.token)
      this.props.signIn(response.data.user.name, archetype, response.data.user.created_at, response.data.token);
      this.props.history.push('/dashboard');
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui vertical stripe quote segment">
          <Divider title="CONTINUE TO YOUR RESULTS" text="Almost done, save your profile and proceed to your results!" />
          <div className="ui center aligned stackable grid container">
            <div className="center aligned row">
              <div className="eight wide column background-orange form">
                <div className="ui form">
                  <div className="field">
                    <label>Name:</label>
                    <div className="ui left icon input">
                      <input
                        type="text"
                        placeholder="your name"
                        value={ this.state.name }
                        onChange={ (e) => this.onInputChange(e, 'name')}
                      />
                      <i className="user icon"></i>
                    </div>
                  </div>
                  <div className="field">
                    <label>Email:</label>
                    <div className="ui left icon input">
                      <input
                        type="email"
                        placeholder="your@mail.com"
                        value={ this.state.email }
                        onChange={ (e) => this.onInputChange(e, 'email')}
                      />
                      <i className="envelope icon"></i>
                    </div>
                  </div>
                  <div className="field">
                    <label>Password:</label>
                    <div className="ui left icon input">
                      <input
                        type="password"
                        placeholder="your password"
                        value={ this.state.password }
                        onChange={ (e) => this.onInputChange(e, 'password')}
                      />
                      <i className="key icon"></i>
                    </div>
                  </div>
                  { this.state.inFetch ?
                    <div className="ui huge loading button login"></div>
                    :
                    <div className="ui huge submit button login" onClick={() => this.onSubmit()}>Save and Continue To My Result</div>
                  }
                </div>
              </div>
              <div className="eight wide column outlaw">
                <div className="contain">
                  <div className="background-toska">
                    <h3>www.twelvetypes.com</h3>
                    <p>contact@twelvetypes.com</p>
                  </div>
                  <button className="ui huge button social">
                    <i className="facebook f icon"></i>
                  </button>
                  <button className="ui huge button social">
                    <i className="instagram icon"></i>
                  </button>
                </div>
              </div>
            </div>
            <Link className="ui huge button" to="/login">Already have an account?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
null, { signIn }
)(Register);
