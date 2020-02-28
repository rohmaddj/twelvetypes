import React from "react"
import logo from "../../assets/images/logo/logo.png"

const Footer = () => {
  return (
    <div className="ui vertical stripe segment">
      <div className="ui footer center aligned stackable grid container">
        <div className="ui text center container">
          <img alt="TwelveTypes Logo" src={logo} />
          <p className="footer-desc">
            Discover your strengths, weaknesses, and drastically improve your ability to adapt by uncovering your personality archetypes.
          </p>
        </div>
        <div className="ui celled horizontal list">
          <a className="item" href='https://twelvetypes.com'>Home</a>
          <a className="item" href='/about'>About Us</a>
          <a className="item" href='/contact'>Contact</a>
          <a className="item" href='/login'>Login</a>
          <a className="item" href='/quiz'>Quiz</a>
          <a className="item" href='/privacy-policy'>Privacy Policy</a>
          <a className="item" href='/terms-and-conditions'>Terms and Conditions</a>
          <div className="item">
            <button className="ui huge button social">
              <i className="facebook f icon"></i>
            </button>
            <button className="ui huge button social">
              <i className="instagram icon"></i>
            </button>
          </div>
        </div>
        <div className="ui text center container copyright">
          Copyright &copy; 2020 TwelveTypes.com
        </div>
      </div>
    </div>
  )
}

export default Footer
