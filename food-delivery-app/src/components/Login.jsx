import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
// import Home from './Home';
import { AddUser } from "../redux/actions";
import { connect } from "react-redux";
import logout from "../utilities/utility";
import { useHistory } from "react-router-dom";

function Login(props) {
  const [passwordlog, setPasswordlog] = useState(" ");
  const [emaillog, setEmaillog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);
  let history = useHistory();
  const triggerLogout = () => {
    setEmaillog();
    // localStorage.clear('Email');
    // localStorage.clear('Password');
    logout();
    setHome(true);
    // setFlag(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let pass = localStorage.getItem("Password");
    let mail = localStorage.getItem("Email");

    // .replace(/"/g,"") is used to remove the double quotes for the string

    if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      AddUser(emaillog);
      console.log(props.loggedInUser);
      setHome(!home);
      history.push("/");
      setFlag(false);
    }
  };

  return (
    <div className="login-div">
      <form onSubmit={handleLogin}>
        <h3>LogIn</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setEmaillog(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPasswordlog(event.target.value)}
          />
        </div>

        <Button type="submit" className="login" variant="success">
          Login
        </Button>

        {flag && (
          <Alert color="primary" variant="warning">
            Fill correct Info else keep trying.
          </Alert>
        )}
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddUser: (review) => dispatch(AddUser(review)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
