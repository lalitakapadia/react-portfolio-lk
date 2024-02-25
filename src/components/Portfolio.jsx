import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Portfolio(){


    const applications = [
        {
            title: 'JbTravelBlog', 
            imageSrc: './src/assets/images/travelBlog.png',
            description: 'sequelize, dorenv, express, handlebars,mysql2, NodeJS',
            deployedLink: 'https://jbtravelblogfinal-84a20cc94acf.herokuapp.com',
            githubLink: 'https://github.com/MustafeMohamoud1/JBTravelBlog'
         },
         {
             title: 'Recipe Translator',
             imageSrc: './src/assets/images/recipeTranslator.png',
             description: 'API, jQuery, TailwindCss, HTML, Javascript',
             deployedLink: 'https://lalitakapadia.github.io/recipe-translator/',
             githubLink: 'https://github.com/lalitakapadia/recipe-translator.git'
 
         },
        {
          title: 'PWA Text Editor',
          imageSrc: './src/assets/images/pwa.png',
          description: 'Nodejs, Webpack, ',
          deployedLink: 'https://pwa-text-editor-lk-7nx4.onrender.com/',
          githubLink: 'https://github.com/lalitakapadia/pwa-text-editor-lk',
        },
        {
            title: 'html-semantic-accessible-website',
            imageSrc: './src/assets/images/html-semantic.png',
            description: 'HTML, CSS',
            deployedLink: 'https://lalitakapadia.github.io/html-semantic-accessible-website//',
            githubLink: 'https://github.com/lalitakapadia/html-semantic-accessible-website.git',
        },
        {            
            title: 'ORM',
            imageSrc: './src/assets/images/ORM.png',
            description: 'Backend CRUD method, Mysql, Insomnia',
            deployedLink: 'https://watch.screencastify.com/v/7uyUnYJ40ATVTTAXXdgO',
            githubLink: 'https://github.com/lalitakapadia/object-relational-mapping-homework.git'
        }
    ]

    return (
        
       <Container>
            <Row>
                <h3 style={{ fontSize: '1.5em', marginLeft: '20px', textAlign: 'center'}}>Portfolio</h3>
            </Row>
            <Row>
                {applications.map((app, index) => (
                    <Col sm={5}>
                        <Card >
                            
                            <Card.Img fluid variant="top" src={app.imageSrc} />
                            <Card.Body>
                            <Card.Title>{app.title}</Card.Title>
                            <Card.Text>
                            {app.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
       </Container> 
        
    )

}

export default Portfolio