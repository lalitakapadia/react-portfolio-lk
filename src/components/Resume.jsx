import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

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
            <div class="p-4">
                <Row>
                    <Col>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                            FrontEnds
                            </ListGroup.Item>
                            {frontEnds.map((technology)=> (
                                <ListGroup.Item as="li">{technology}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                            BackEnds
                            </ListGroup.Item>
                            {backEnds.map((technology)=> (
                                <ListGroup.Item as="li">{technology}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    
                    <Col>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                            Databases
                            </ListGroup.Item>
                            {databases.map((technology)=> (
                                <ListGroup.Item as="li">{technology}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    
                    <Col>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                            Deployments
                            </ListGroup.Item>
                            {deployments.map((technology)=> (
                                <ListGroup.Item as="li">{technology}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    
                    <Col>
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
            </div>
        </>
    )
}