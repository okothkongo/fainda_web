import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Col,
  Row,
  Dropdown,
  Container,
  NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";
import $ from "jquery";
import "../assets/css/header.css";
import logo from "../assets/img/logo.png";

class Header extends Component {
  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "https://fainda-api.herokuapp.com/api/v0/User/auth/validate_token",
      dataType: "JSON",
      headers: JSON.parse(sessionStorage.getItem("user"))
    });
    
  }
  userSignout() {
    $.ajax({
      type: "POST",
      url: "https://fainda-api.herokuapp.com/api/v0/User/auth/signout",
      dataType: "JSON",
      headers: JSON.stringify(sessionStorage.clear("user"))
    });
  }

  render() {
    const userSession = sessionStorage.getItem("user");

    return (
      <div id="header">
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
              <a href="/">
                <img src={logo} style={{ width: 50 }} alt="logo" />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link id="home" to="/">
                  Home
                </Link>
                <Link id="home" to="#">
                  About
                </Link>
                <Link id="home" to="#">
                  Contacts Us
                </Link>
                <div>
                  <div>
                    {" "}
                    {userSession ? (
                      <NavDropdown
                        title={
                          JSON.parse(sessionStorage.getItem("user")).first_name
                        }
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item>
                        <Link to="/advertisement/create" style={{color: 'black'}}>Create Advert</Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item onClick={this.userSignout()}>
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    ) : (
                      <NavDropdown title="Account">
                        <NavDropdown.Item href="/user/signin">
                          Login
                        </NavDropdown.Item>

                        <NavDropdown.Item href="/user/signup">
                          Sign up
                        </NavDropdown.Item>
                      </NavDropdown>
                    )}
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Container>
          <Row>
            <Col id="dropdown-menu">
              <Dropdown>
                <Dropdown.Toggle variant="success">
                  Find By Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/electronic">Electronics</Dropdown.Item>
                  <Dropdown.Item href="/food">Food</Dropdown.Item>
                  <Dropdown.Item href="/farm">Farm</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col id="search-button">
              <div className="input-group mb-3  margin-bottom">
                <div className="input-group-prepend">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for Product"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                </div>
                <select className="custom-select">
                  <option selected>Category...</option>
                  <option value="farm">Farm</option>
                  <option value="electronic">Electronics</option>
                  <option value="food">Food</option>
                </select>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    Search
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Header;
