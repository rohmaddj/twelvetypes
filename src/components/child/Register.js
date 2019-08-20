import React from 'react';
import Divider from './Divider';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import twelveType from '../../api/twelveType';

class Register extends React.Component {
  state = { email: '', name: '', password: '', inFetch: false }
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

      this.props.signIn(response.data.user.name, response.data.user.archetype, response.data.token);
      this.props.history.push('/dashboard');
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui vertical stripe quote segment">
          <Divider title="REGISTER" />
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
                    <div className="ui huge submit button login" onClick={() => this.onSubmit()}>Register</div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
null, { signIn }
)(Register);
