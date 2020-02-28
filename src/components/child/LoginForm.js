import React from "react"

const LoginForm = props => {
  return (
    <div className="seven wide column background-orange form">
      <h3>Already have an account?</h3>
      <div className="ui form">
        <div className="field">
          <div className="ui left icon input">
            <input
              type="text"
              placeholder="Email"
              value={props.email}
              onChange={e => props.onInputChange(e, "email")}
            />
            <i className="envelope icon"></i>
          </div>
        </div>
        <div className="field">
          <div className="ui left icon input">
            <input
              type="password"
              placeholder="Password"
              value={props.password}
              onChange={e => props.onInputChange(e, "password")}
            />
            <i className="lock icon"></i>
          </div>
        </div>
        {props.message === "fail" ? (
          <div className="ui red message">Password and email do not match</div>
        ) : (
          ""
        )}
        {props.message === "success" ? (
          <div className="ui green message">Success</div>
        ) : (
          ""
        )}
        {props.inFetch ? (
          <div className="ui huge loading button login"></div>
        ) : (
          <div
            className="ui huge submit button login"
            onClick={() => props.onSubmit("login")}
          >
            LOGIN
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginForm
