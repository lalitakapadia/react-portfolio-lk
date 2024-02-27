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
            description: 'NodeJS, Express, MySQL, Sequelize, Tailwind',
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
          title: 'weather Dashboard',
          imageSrc: './src/assets/images/weatherDashboard.png',
          description: 'Open Weather API, jQuery, HTML, Javascript',
          deployedLink: 'https://lalitakapadia.github.io/weather-dashboard/',
          githubLink: 'https://github.com/lalitakapadia/weather-dashboard.git'
         },
         {
          title: 'Work day Scheduler',
          imageSrc: './src/assets/images/workdayScheduler.png',
          description: 'HTML, CSS, JavaScript, jQuery, BootStrap',
          deployedLink: 'https://lalitakapadia.github.io/workday-scheduler/r',
          githubLink: 'https://github.com/lalitakapadia/workday-scheduler.git'
        },
         {
           title: 'Note Taker',
           imageSrc: './src/assets/images/noteTaker.png',
           description: 'Express.js, backend application',
           deployedLink: 'https://github.com/lalitakapadia/express-note-taker',
           githubLink: 'https://github.com/lalitakapadia/express-note-taker.git'
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
        <div>
          <div>
            Portfolio
          </div>
          <div class="container">
            <div class="row">
              {applications.map((app, index)=> (
                <div class="col-4 p-3">
                  <div class="card">
                    <Card >
                        <Card.Img fluid variant="top" src={app.imageSrc} />
                        <Card.Body>
                          <Card.Title>{app.title}</Card.Title>
                          <Card.Text>
                          {app.description}
                          <a href={app.githubLink} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" style={{ color: 'black', fontSize: '2em', margin: '5px' }}></i>
                          </a>{" "}
                          </Card.Text>
                          <Button href={app.deployedLink} target="_blank" variant="primary" >Visit {app.title}</Button>
                        </Card.Body>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    
    )
}

export default Portfolio