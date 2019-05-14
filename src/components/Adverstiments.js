import React, { Component } from "react";
import { Row, Col, Card } from "reactstrap";
class Adverstiments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adverstiments: [],
      isLoading: ""
    };
  }

  componentDidMount() {
    fetch("https://fainda-api.herokuapp.com/api/v0/advertisements")
      .then(res => res.json())
      .then(json => {
        this.setState({ adverstiments: json });
      });
  }

  render() {
    let { adverstiments } = this.state;
    return (
      <Row>
        {adverstiments.map((advert, key) => {
          return (
            <Col sm="4">
              <Card top width="50%">
                <h1>{advert.category}</h1>
                <p>type:{advert.advert_type}</p>
                <p>location:{advert.location}</p>
                <p>price:{advert.price}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Adverstiments;
