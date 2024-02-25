import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import React from 'react';

export default function AboutMe() {
    return (
        <Container>
            <Row>
                <Col sm={4} >
                    <Image src="./src/assets/images/lalitakapadia.jpg" roundedCircle fluid />
                    {/* <img src= "./src/assets/images/lalitakapadia.jpg" alt = "photo"  
                    style={{ width: '195px', height: '195px', borderRadius: '50%' }} ></img> */}
                </Col>
                <Col sm={8}>
                    <h3 style = {{ textAlign: 'left', fontSize: '1.5em'}}>About Me</h3>
                    <p style={{ textAlign: 'justify', fontSize: '1.3em', maxWidth: '90%', width: '100%'}}>
                     paragraph about me 
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
