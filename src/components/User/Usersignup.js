import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';

class Usersignup extends Component {
    render() {
        return (
            <div>               
                <Container>  
                    <Form>         

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input type="text" name="firstName"  placeholder="First Name" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input type="text" name="lastName"  placeholder="Last Name" />
                            </FormGroup>
                        </Col>
                    </Row>        
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" placeholder="janedoe@example.com"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="phoneNumber">Phone Number</Label>
                            <Input type="text" name="phoneNumber" />
                            </FormGroup>
                        </Col>          
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password"/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="confirmPassword">Confrim Password</Label>
                            <Input type="password" name="confirmPassword" />
                            </FormGroup>
                        </Col>          
                    </Row>
                    <Button type="submit">
                        CREATE ACCOUNT
                    </Button>
                    </Form>  
                   
                    </Container>

            </div>
        );
    }
}

export default Usersignup;