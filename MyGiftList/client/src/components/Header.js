import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../modules/authManager";
import "./image.css"

const Header = ({ isLoggedIn }) => {
  return (
      <nav className="nav-main">
          <div className="logo-container">
              <Link to="/" className="navbar-title">
                <img
                  src="/images/logo.png"
                  alt="MyGiftList text logo"
                  className="logo-image"
              />
              </Link>
          </div>
          

          <ul className="nav-list">
              {isLoggedIn && (
                  <>
                      <li className="nav-li">
                          <Link to="/gifts" className="nav--link">
                              Gifts
                          </Link>
                      </li>
                      <li className="nav-li">
                          <Link to="/recipients" className="nav--link">
                              Recipients
                          </Link>
                      </li>
                      <li className="nav-li">
                          <p
                              className="nav--link"
                              style={{ cursor: "pointer" }}
                              onClick={logout}
                          >
                              Logout
                          </p>
                      </li>
                  </>
              )}

              {!isLoggedIn && (
                  <>
                      <li className="nav-li">
                          <Link to="/login" className="nav--link">
                              Login
                          </Link>
                      </li>
                      <li className="nav-li">
                          <Link to="/register" className="nav--link">
                              Register
                          </Link>
                      </li>
                  </>
              )}
          </ul>
      </nav>
  )
}

export default Header