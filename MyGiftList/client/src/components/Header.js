import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../modules/authManager";

const Header = ({ isLoggedIn }) => {
  return (
      // <nav className="navbar navbar-expand navbar-dark bg-info">
      //     <Link to="/" className="navbar-brand">
      //         My Gift List
      //     </Link>

      //     <ul className="navbar-nav mr-auto">
      //         {isLoggedIn && (
      //             <>
      //                 <li className="nav-item">
      //                     <Link to="/gifts" className="nav-link">
      //                         Gifts
      //                     </Link>
      //                 </li>
      //                 <li className="nav-item">
      //                     <Link to="/recipients" className="nav-link">
      //                         Recipients
      //                     </Link>
      //                 </li>
      //                 <li className="nav-item">
      //                     <p
      //                         className="nav-link"
      //                         style={{ cursor: "pointer" }}
      //                         onClick={logout}
      //                     >
      //                         Logout
      //                     </p>
      //                 </li>
      //             </>
      //         )}

      //         {!isLoggedIn && (
      //             <>
      //                 <li>
      //                     <Link to="/login" className="nav-link">
      //                         Login
      //                     </Link>
      //                 </li>
      //                 <li>
      //                     <Link to="/register" className="nav-link">
      //                         Register
      //                     </Link>
      //                 </li>
      //             </>
      //         )}
      //     </ul>
      // </nav>

      <nav className="nav-main">
          <Link to="/" className="navbar-title">
              My Gift List
          </Link>

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