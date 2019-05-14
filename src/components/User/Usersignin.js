import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import $ from "jquery";

class Usersignin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
    const userSigninData= {
      email: this.state.email,

      password: this.state.password
    };
    $.ajax({
      type: "POST",
      url: "http://localhost:5000/api/v0/User/auth/signout",
      data: userSigninData
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
      if (status === "success") {
        this.props.history.push("/");
      }
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="janedoe@example.com"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" />
            </FormGroup>
            <Button type="submit">Sign in</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Usersignin;
