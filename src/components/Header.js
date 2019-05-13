import React, { Component } from "react";
import { Navbar, Nav, Col, Row, Dropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.css";
class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Fainda</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/">Home</Link>
                <Link to="/user/signup">Register</Link>
                <Link to="/">Sign in</Link>
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
