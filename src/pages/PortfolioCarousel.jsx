import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function PortfolioCarousel() {

    const applications = [
        {
            title: 'ExpenseTracker', 
            imageSrc: '/images/BudgetPage.png',
            description: 'MERN, Express, React, NodeJs, Mongodb, ReactBootstrap, ChakraUI, Chart.js, GraphQl',
            deployedLink: 'https://budgetbuddytracker.onrender.com/',
            githubLink: 'https://github.com/BudgetBuddy887/expenseTracker'
        },
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
            title: 'Portfolio',
            imageSrc: '/images/LalitaKapadia-Portfolio.png',
            description: 'React, Vite, React-Bootstrap, Axios', 
            deployedLink: 'https://lalita-kapadia-portfolio.netlify.app',
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
            imageSrc: '/images/WorkdayScheduler.png',
            description: 'HTML, CSS, JavaScript, jQuery, BootStrap',
            deployedLink: 'https://lalitakapadia.github.io/workday-scheduler/',
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
    
  return (
    <>
        <div>
            <Container style={{ height: '80vh'}} bg="secondary" data-bs-theme="dark">
                <Row>
                    <Col sm={12} style={{alignText: 'center'}}>
                        <Carousel>
                            {applications.map((app)=> (
                                    <Carousel.Item> 
                                        <div style={{textAlign: 'center', padding: 5}}>
                                        <Button  target="" variant="info" href={app.deployedLink}>
                                            {app.title}
                                        </Button>
                                        </div>                                  
                                        <img className="d-block w-100 opacity-75" src={app.imageSrc} alt={app.title} style={{height: '80vh'}} ></img>              
                                    <Carousel.Caption>   
                                    <a fluid href={app.githubLink} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github" style={{ color: 'black', fontSize: '2em', margin: '5px' }}></i>
                                    </a>{" "}
                                    
                                    <p>{app.description}</p>
                                    </Carousel.Caption>                         
                                    </Carousel.Item>
                                ))}                                
                        </Carousel>                        
                    </Col>
                </Row>
            </Container>
        </div>
        
    </>
    
  );
}