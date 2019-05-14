import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

class Usersignin extends Component {
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
