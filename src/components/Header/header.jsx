import React from "react";
import './header.css';

function Header() {
    return (
  <>
    <header>
      <div id="topNavVariant">
        <div className="navMaxWidth">
              <div id="topNavRightVariant" className="clear-margin-top">
                  <span className="menu-item desktop-inline-block">
                    <a className="nounderline" href="#">Discover</a>
                  </span>
                  <span className="menu-item desktop-inline-block">
                      <a href="#" className="nounderline">Search</a>
                  </span>
                  <span className="menu-item desktop-inline-block clear-margin-top">
                      <a href="#" className=" tryText">Try Instaread</a>
                  </span>
                  <span className="menu-item desktop-inline-block clear-margin-top">
                      {/* <a href="#" className="nounderline">Login</a> */}
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle loginHeader" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Login
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                        </ul>
                      </li>
                  </span>
                    
              </div>

              <div id="topNavLeftVariant" className="clear-margin-top">
                  <a href="#">
                      <img src="https://instaread.co/images/instaread_logo_grey.svg" alt="Instaread Logo" />
                  </a>
              </div>
        </div>
      </div>
    </header>

  </>
)
}

export default Header;