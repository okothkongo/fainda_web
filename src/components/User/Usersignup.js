import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from "reactstrap";
import $ from "jquery";
import "../../assets/css/usersignup.css";

class Usersignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const userData = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      phone_number: this.state.phoneNumber,
      password: this.state.password,
      password_confirmation: this.state.confirmPassword
    };
    $.ajax({
      type: "POST",
      url: "https://fainda-api.herokuapp.com/api/v0/User/auth",
      data: userData
    }).done((response, status, jqXHR) => {
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          "access-token": jqXHR.getResponseHeader("access-token"),
          client: jqXHR.getResponseHeader("client"),
          uid: response.data.uid,
          first_name: response.data.first_name
        })
      );
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div id="signup">
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="janedoe@example.com"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="phoneNumber">Phone Number</Label>
                  <Input
                    type="text"
                    name="phoneNumber"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="confirmPassword">Confrim Password</Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button type="submit">CREATE ACCOUNT</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Usersignup;
