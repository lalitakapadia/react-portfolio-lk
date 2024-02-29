import React from 'react';
import ProjectCard from '../components/ProjectCard'
import { Row, Col, Container } from 'react-bootstrap';

function Portfolio(){

   // link for projects
    const applications = [
        {
            title: 'JbTravelBlog', 
            imageSrc: '/images/travelBlog.png',
            description: 'NodeJS, Express, MySQL, Sequelize, Tailwind',
            deployedLink: 'https://jbtravelblogfinal-84a20cc94acf.herokuapp.com',
            githubLink: 'https://github.com/MustafeMohamoud1/JBTravelBlog'
         },
         {
             title: 'Recipe Translator',
             imageSrc: '/images/recipeTranslator.png',
             description: 'API, jQuery, TailwindCss, HTML, Javascript',
             deployedLink: 'https://lalitakapadia.github.io/recipe-translator/',
             githubLink: 'https://github.com/lalitakapadia/recipe-translator.git'
 
         },
         {
          title: 'weather Dashboard',
          imageSrc: '/images/weatherDashboard.png',
          description: 'Open Weather API, jQuery, HTML, Javascript',
          deployedLink: 'https://lalitakapadia.github.io/weather-dashboard/',
          githubLink: 'https://github.com/lalitakapadia/weather-dashboard.git'
         },
         {
          title: 'Work day Scheduler',
          imageSrc: '/images/workdayScheduler.png',
          description: 'HTML, CSS, JavaScript, jQuery, BootStrap',
          deployedLink: 'https://lalitakapadia.github.io/workday-scheduler/r',
          githubLink: 'https://github.com/lalitakapadia/workday-scheduler.git'
        },
         {
           title: 'Note Taker',
           imageSrc: '/images/noteTaker.png',
           description: 'Express.js, backend application',
           deployedLink: 'https://github.com/lalitakapadia/express-note-taker',
           githubLink: 'https://github.com/lalitakapadia/express-note-taker.git'
         },
         
        

        {
          title: 'PWA Text Editor',
          imageSrc: '/images/pwa.png',
          description: 'Nodejs, Webpack, ',
          deployedLink: 'https://pwa-text-editor-lk-7nx4.onrender.com/',
          githubLink: 'https://github.com/lalitakapadia/pwa-text-editor-lk',
        },
        {
            title: 'html-semantic-accessible-website',
            imageSrc: '/images/html-semantic.png',
            description: 'HTML, CSS',
            deployedLink: 'https://lalitakapadia.github.io/html-semantic-accessible-website//',
            githubLink: 'https://github.com/lalitakapadia/html-semantic-accessible-website.git',
        },
        {            
            title: 'ORM',
            imageSrc: '/images/ORM.png',
            description: 'Backend CRUD method, Mysql, Insomnia',
            deployedLink: 'https://watch.screencastify.com/v/7uyUnYJ40ATVTTAXXdgO',
            githubLink: 'https://github.com/lalitakapadia/object-relational-mapping-homework.git'
        }
    ]
     // using react bootstrap for the array of dependencies
    return (
      <>
        <Container>
          <Row>
            <Col xs={12} style={{textAlign: 'center', padding: 10, fontSize: 32}}>
              Project Portfolio
            </Col>
          </Row>
          <Row>
            {applications.map((app)=> (
                 <Col xs={12} md={6} lg={4} style={{padding: 10}}>
                  <ProjectCard application={app} />
                 </Col>
               ))}
          </Row>
        </Container>
      </>
      //   <div>
      //     <>
      //     <div  > 
      // <h3 style={{ fontSize: '2.4em', marginLeft: '10px', textAlign: 'center'}}>Portfolio</h3>
      //     </div>
      //     <div class="container">
      //       <div class="row">
      //         {applications.map((app)=> (
      //           <div class="col-4 p-3">
      //             <div class="card">
      //               <Project application={app} />
      //             </div>
      //           </div>
      //         ))}
      //       </div>
      //     </div>
      //     </>
      //   </div>
       
    )
}

export default Portfolio