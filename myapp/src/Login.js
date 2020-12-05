import React, { useState } from "react";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push({pathname: "/cart", state: username});
  }

  function performValidation() {
    return username.length > 0 && password.length > 0;
    }
  return (
    <React.Fragment>
      <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">WELCOME TO LalaLand!!</h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-block"
                disabled={!performValidation()}
                onClick={handleSubmit}
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
