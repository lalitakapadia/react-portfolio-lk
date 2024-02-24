import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Portfolio(){

    const linkStyle = {
        color: '#1E2749',
        textDecoration: 'none',
        padding: '8px',
        borderRadius: '5px',
    };
    
      const activeLinkStyle = {
        backgroundColor: '#1E2749',
        color: '#BCD2EE',
    };

    const applications = [
        {
          title: 'PWA Text Editor',
          imageSrc: './src/assets/images/pwa.png',
          description: 'Nodejs, Webpack, ',
          deployedLink: 'https://pwa-text-editor-lk-7nx4.onrender.com/',
          githubLink: 'https://github.com/lalitakapadia/pwa-text-editor-lk',
        }
    ]

    return (
        <div>
            <br/>
            <h3 style={{ fontSize: '1.5em', marginLeft: '20px', textAlign: 'center'}}>Portfolio</h3>
            <br/>
            <div className="applications-container">
                {applications.map((app, index) => (
                    <div key={index} className="application-card">
                        <img src={app.imageSrc} alt={app.title} className="app-image"></img>
                        <div></div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Portfolio