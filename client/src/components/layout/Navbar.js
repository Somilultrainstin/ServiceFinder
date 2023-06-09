import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { getIsAdminFromToken } from "../../utils/getAuthToken";

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const isAdmin = getIsAdminFromToken();
  const adminLinks = () => {
    if (isAdmin)
      return (
        <li>
          <Link to="/admin">
            <i className="fas fa-user"></i>{" "}
            <span className="hide-sm">Admin</span>
          </Link>
        </li>
      );
  };

  const sellerLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          <i className="fas fa-home"></i>{" "}
          <span className="hide-sm">All Services</span>
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user"></i>{" "}
          <span className="hide-sm">My Profile</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="fas fa-search"></i>{" "}
          <span className="hide-sm">Search</span>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <i className="fa  fa-info-circle"></i>{" "}
          <span className="hide-sm">About Us</span>
        </Link>
      </li>
      <li>
        <Link to="#!" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
      {adminLinks()}
    </ul>
  );

  const buyerLinks = (
    <ul>
      <li>
        <Link to="/profiles">
          <i className="fas fa-home"></i>{" "}
          <span className="hide-sm">All Services</span>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <i className="fa  fa-info-circle"></i>{" "}
          <span className="hide-sm">About Us</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="fas fa-search"></i>{" "}
          <span className="hide-sm">Search</span>
        </Link>
      </li>
      <li>
        <Link to="#!" onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
      {adminLinks()}
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">All Services</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h2 className="hide-sm">
        <Link to="/">
          Household<span style={{ color: "#ff9900" }}>ServiceProvider</span>
        </Link>
      </h2>
      {!loading && (
        <Fragment>
          {isAuthenticated && user?.isSeller ? (
            sellerLinks
          ) : (
            <Fragment>
              {isAuthenticated && !user?.isSeller ? buyerLinks : guestLinks}
            </Fragment>
          )}
        </Fragment>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
