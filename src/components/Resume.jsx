import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Container } from 'react-bootstrap';

const frontEnds = [
    "MERN",
    "REACT",
    "REACT NATIVE",
    "REACT BOOTSTRAP",
    "PWA",
    "JAVASCRIPT",
    "JQuery",
    "CSS",
    "BOOTSTRAP",
    "TAILWIND",
    "HTML",
    
]

const backEnds = [
    "NODEJS",
    "EXPRESS",
    "SEQUELIZE",
    "ORM",
    "INQUIRER",
    "MVC",
    "API",
    "JSON",
]

const databases = [
    "MYSQL",
    "MONGODB",
    "GRAPHQL",
    "SQL",
    "SQLite",
]

const test = [
    "INSOMNIA",
    "POSTMAN",
    "JEST UNIT TEST FRAMEWORK",
]

const deployments = [
    "HEROKU",
    "RENDER",
    "NETLIFY",
    "GIT PAGES",
]

const tools = [
    "VS CODE",
    "MICROSOFT OFFICE",
    "SCREEN CASTIFY",
    "GITHUB",
    "GITLAB",
]

export default function Resume() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={12} md={6}>
                        <h3 style={{ fontSize: '2.4em', marginLeft: '10px', }}>Resume</h3>
                    </Col>
                    <Col sm={12} md={6} style={{padding:10, textAlign: 'right'}}  >
                        <Button target="" variant="info" href="https://docs.google.com/document/d/193Scp06iuDSKS6m6RLLJVrWc0wwWEf_8/edit?usp=drive_link&ouid=107972184887030584857&rtpof=true&sd=true">
                            Download Resume
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={3} style={{padding: 5}}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                            FrontEnds
                            </ListGroup.Item>
                            {frontEnds.map((technology)=> (
                                <ListGroup.Item as="li">{technology}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col xs={12}  md={6} lg={3} style={{padding: 5}}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                            BackEnds
                            </ListGroup.Item>
                            {backEnds.map((technology)=> (
                                <ListGroup.Item as="li">{technology}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    
                    <Col xs={12} md={6} lg={2} style={{padding: 5}}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                            Databases
                            </ListGroup.Item>
                            {databases.map((technology)=> (
                                <ListGroup.Item as="li">{technology}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    
                    <Col xs={12} md={6} lg={2} style={{padding: 5}}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                            Deployments
                            </ListGroup.Item>
                            {deployments.map((technology)=> (
                                <ListGroup.Item as="li">{technology}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    
                    <Col xs={12} md={6} lg={2} style={{padding: 5}}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                            Tools
                            </ListGroup.Item>
                            {tools.map((technology)=> (
                                <ListGroup.Item as="li">{technology}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>

            </Container>
        </>
    )
}