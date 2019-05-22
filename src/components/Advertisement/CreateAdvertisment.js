import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Container, Button } from "react-bootstrap";
import { FormGroup, Label, Input } from "reactstrap";
import $ from "jquery";

class CreateAdvertisment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      model: "",
      type: "",
      location: "",
      price: "",
      image: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileChangedHandler= this.fileChangedHandler.bind(this);
  }
  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "https://fainda-api.herokuapp.com/api/v0/User/auth/validate_token",
      dataType: "JSON",
      headers: JSON.parse(sessionStorage.getItem("user"))
    }).done((response, status, jqXHR) => {});
  }
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    const advertinfo = {
      user_id: 1,
      category: this.state.category,
      advert_type: this.state.type,
      model: this.state.model,
      location: this.state.location,
      price: this.state.price,
      image: formData
    };
    $.ajax({
      type: "POST",
      url: "http://localhost:5000/api/v0/advertisements",
      data: advertinfo
    }).done((response, status, jqXHR) => {
      console.log(status);
    });
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
          <FormGroup>
            <Label>Image</Label>
            <Input type="file" name="image" onChange={this.fileChangedHandler} />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default CreateAdvertisment;
