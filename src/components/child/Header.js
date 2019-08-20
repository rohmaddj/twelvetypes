import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo/logo-white.png';

class Header extends React.Component {
  render() {
    return (
      <div className="ui inverted segment">

        <div className="ui inverted secondary menu">
          <Link to="#sample" className="toc item">
            <i className="sidebar icon"></i>
          </Link>
          <div className="item">
            <Link to="/">
              <img src={logo} alt="sample alt" className="logo-img"/>
            </Link>
          </div>
          <div className="right item">
            <Link className="item" to="/about">
              ABOUT
            </Link>
            <Link className="item" to="/archetype">
              ARCHETYPE
            </Link>
            <Link className="item" to="/contact">
              CONTACT
            </Link>
            { this.props.isSignedIn ?
            <Link className="item" to="/dashboard">
              DASHBOARD
            </Link>
            :
            <Link className="item" to="/login">
              LOGIN
            </Link>
            }
            <Link className="b-special ui huge button" to="/quiz">
              TAKE THE QUIZ
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}
export default connect(
  mapStateToProps
)(Header);