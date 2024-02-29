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
                        <Image src="/images/lalitakapadia.jpg" roundedCircle fluid />
                    </Col>
                    <Col sm={8}>
                        <h3 style = {{ textAlign: 'left', fontSize: '1.5em'}}>About Me</h3>
                        <p style={{ textAlign: 'justify', fontSize: '1.3em', maxWidth: '90%', width: '100%'}}>

                        I am working as Customer Service Asssistance in Sainsbury's since last  years.
                        <br></br>
                        <br></br>
                        During Full Stack Web Developer Bootcamp course at University of Birmingham I have learned so many technical and soft skills to develop web applications using latest modern technologies.
                        <br></br>
                        <br></br>
                        Please visit the <a style={{color:'black'}} href="/resume">resume</a> section to see the full stack I have learned and implemented through many project assignments.  
                        <br></br>
                        <br></br>
                        I am ready to step into the information technology sector. Please get in touch! 
                        </p>

                    </Col>
                </Row>
            </Container>
        </div>
       </>
    );
}
