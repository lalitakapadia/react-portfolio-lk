import React from 'react';
import { Link, useLocation } from 'react-router-dom';


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
           title: 'Note Taker',
           imageSrc: './src/assets/images/noteTaker.png',
           description: 'Express.js, backend application',
           deployedLink: 'https://github.com/lalitakapadia/express-note-taker',
           githubLink: 'https://github.com/lalitakapadia/express-note-taker.git'
         },
         {
            title: 'Work day Scheduler',
            imageSrc: './src/assets/images/workdayScheduler.png',
            description: 'HTML, CSS, JAVASCRIPT, JQUERY, DAY.JS, BOOTSTRAP',
            deployedLink: 'https://lalitakapadia.github.io/workday-scheduler/r',
            githubLink: 'https://github.com/lalitakapadia/workday-scheduler.git'
          },
         {
          title: 'weather Dashboard',
          imageSrc: './src/assets/images/weatherDashboard.png',
          description: 'Open Weather API, jQuery, HTML, Javascript',
          deployedLink: 'https://lalitakapadia.github.io/weather-dashboard/',
          githubLink: 'https://github.com/lalitakapadia/weather-dashboard.git'
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
                <div class="col-6 p-3">
                  <div class="card">
                    <img class="card-img-top" src={app.imageSrc} alt="Card image cap"></img>
                    <div class="card-body">
                      <h5 class="card-title">{app.title}</h5>
                      <p class="card-text">{app.description}</p>
                      <a href={app.deployedLink} class="btn btn-primary">Visit {app.title}</a>
                      <a href={app.githubLink} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github" style={{ color: 'black', fontSize: '2em', margin: '5px' }}></i>
                      </a>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    
    //     <div>
    //   <br/>
    //   <h3 style={{ fontSize: '1.5em', marginLeft: '20px', textAlign: 'center'}}>Portfolio</h3>
    //   <br/>
    //   <div className="applications-container">
    //     {applications.map((app, index) => (
    //       <div key={index} className="application-card">
    //         <img src={app.imageSrc} alt={app.title} className="app-image" />
    //         <div className="overlay">
    //           <a href={app.deployedLink} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
    //             <h2 className="app-title">{app.title}</h2>
    //           </a>
    //           <p>{app.description}</p>
    //           <div className="links">
    //             <a href={app.githubLink} target="_blank" rel="noopener noreferrer">
    //               <i className="fab fa-github" style={{ color: 'black', fontSize: '2em', margin: '5px' }}></i>
    //             </a>{" "}
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
        
    //   <style jsx>{`
    //     .applications-container {
    //       display: flex;
    //       flex-wrap: wrap;
    //       justify-content: space-between;
    //       margin: 0 auto; 
    //       max-width: 1200px; 
    //     }
    //     .application-card {
    //       position: relative;
    //       width: 48%;
    //       margin-bottom: 20px;
    //       box-sizing: border-box;
    //       overflow: hidden;
    //     }
    //     .app-image {
    //       width: 100%;
    //       height: auto;
    //       display: block;
    //       transition: transform 0.3s ease, filter 0.3s ease;
    //     }
    //     .overlay {
    //       position: absolute;
    //       top: 50%;
    //       left: 50%;
    //       transform: translate(-50%, -50%);
    //       text-align: center;
    //       width: 100%;
    //       color: black;
    //       opacity: 0;
    //       transition: opacity 0.3s ease;
    //     }
    //     .application-card:hover .overlay {
    //       opacity: 1;
    //     }
    //     .application-card:hover .app-image {
    //       filter: blur(5px);
    //     }
    //     .app-title {
    //       margin: 0;
    //       font-size: 1.5em;
    //       textDecoration: none;
    //     }
    //     .links {
    //       margin-top: 10px;
    //     }
    //     .links a {
    //       display: block;
    //       margin-bottom: 10px;
    //     }
    //     @media (max-width: 768px) {
    //       .application-card {
    //         width: 100%;
    //       }
    //     }
    //   `}</style>
    // </div>
   
  )

}

export default Portfolio