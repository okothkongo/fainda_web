import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Container, Button } from "react-bootstrap";
import { FormGroup, Label, Input } from "reactstrap";

class CreateAdvertisment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      model: '',
      type: '',
      location: '',
      price: ''
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
    const advertinfo = {
      category: this.state.category,
      advert_type: this.state.type,
      model: this.state.model,
      location: this.state.location,
      price: this.state.price
    };
    console.log(advertinfo);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Category</Label>
            <Input type="text" name="category" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Type</Label>
            <Input type="text" name="type" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Model</Label>
            <Input type="text" name="model" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Location</Label>
            <Input type="text" name="location" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label>Price</Label>
            <Input type="text" name="price" onChange={this.handleChange} />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default CreateAdvertisment;
