import {React, useState } from 'react';
import { validateEmail } from '../utils/helpers';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

export default function Contact() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
    return (
        <>    
        <div class='p-10'>
            <br/>
            <h3 style={{ fontSize: '2.4em', marginLeft: '10px', textAlign: 'center'}}>Contact</h3>
            <br/>
            <Container fluid>
                <Form  noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-10">
                        <Col xs={12} lg={{ span: 6, offset: 3 }}>
                            <Row className="mb-3">
                                <Form.Group md="4" controlId="validationCustom01">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Full Name"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter your name
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" required placeholder="Enter email" />
                                    <Form.Control.Feedback type="invalid">
                                        Please enter valid email address
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group controlId="formGridMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control required as="textarea" rows={3}  placeholder="Enter your message here" />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter the message
                                        </Form.Control.Feedback>
                                    </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridSubmit">
                                        <Button type="submit" variant="info">Submit</Button>{' '}
                                    </Form.Group>
                            </Row>
                        </Col>
                    </Row>
                </Form>

            </Container>
            
        </div>
        </>
        
    )     
}