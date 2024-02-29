import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import React from 'react';

export default function AboutMe() {
    return (
       <>
        <div style= {{ padding:50}}>
            <Container>
                <Row>
                    <Col sm={4} >
                        <Image src="./src/assets/images/lalitakapadia.jpg" roundedCircle fluid />
                    </Col>
                    <Col sm={8}>
                        <h3 style = {{ textAlign: 'left', fontSize: '1.5em'}}>About Me</h3>
                        <p style={{ textAlign: 'justify', fontSize: '1.3em', maxWidth: '90%', width: '100%'}}>
                        I am current student of the University of Birmingham Full stack web developer bootcamp cousrse.
                        With newly developed skills in MERN, React.js, Databases, Node.js, JavaScript, CSS, Tailwind, Bootstrap, HTML and responsive web design.
                        
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
       </>
    );
}
