import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Featured from "../featured";
import Contact from "../contact/Contact";
import Login from "../login/login";
import NavMenu from "./navMenu";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <Router>
      <div>
        <nav>
          {/* 手機板 < 768 */}
          <ul className="d-flex align-items-center sm-d-none">
            <li className="mr-auto">
              <Link to="/">
                <span id="logo">MomDaddy</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className="material-icons">feedback</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span className="material-icons">account_circle</span>
              </Link>
            </li>
            <li>
              <NavMenu />
            </li>
          </ul>

          {/* 平板 >768 */}
          <ul className="align-items-center d-none sm-d-flex">
            <li>
              <Link to="/">
                <span id="logo">MomDaddy</span>
              </Link>
            </li>
            <li className="search-bar d-flex">
              <input type="text" className="search-input" />
              <a href="#/action-1">
                <span className="material-icons ml-auto">search</span>
              </a>
            </li>
            <li>
              <Link to="/contact">
                <span className="material-icons">feedback</span>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span className="material-icons">account_circle</span>
              </Link>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <span className="material-icons">keyboard_arrow_down</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Notifications</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Report a problem
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">
                    About MomDaily
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-5">Privacy</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Featured
              data={props.data}
              doClick={props.doClick}
              selected={props.selected}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
