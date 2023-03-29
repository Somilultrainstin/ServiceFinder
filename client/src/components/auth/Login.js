import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { getIsAdminFromToken } from "../../utils/getAuthToken";

const Login = ({ login, auth }) => {
  const isAdmin = getIsAdminFromToken();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  //redirect if logged in
  if (isAdmin) {
    return <Redirect to="/admin" />;
  }
  if (auth.isAuthenticated) {
    return <Redirect to="/profiles" />;
  }

  return (
    <Fragment>
      <div
        style={{
          width: "auto",
          textAlign: "center",
          fontSize: "1.5rem",
          margin: "30px",
          backgroundColor: "#4c4c4c",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user" /> Sign Into Your Account
        </p>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div
            className="form-group"
            style={{ width: "60%", position: "relative", left: "20%" }}
          >
            <div className="form-text">Email Address</div>
            <input
              style={{ borderRadius: "10px" }}
              type="email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div
            className="form-group"
            style={{ width: "60%", position: "relative", left: "20%" }}
          >
            <div className="form-text">Password</div>
            <input
              style={{ borderRadius: "10px" }}
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { login })(Login);
