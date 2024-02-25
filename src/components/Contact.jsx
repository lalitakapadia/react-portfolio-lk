import {React, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Col className="p:10" xs={11} sm={11}>
                <Row className="mb-3">
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
                            <Button type="submit" variant="primary">Submit</Button>{' '}
                        </Form.Group>
                </Row>
                </Row>
            </Col>
        </Form>
    )     
}