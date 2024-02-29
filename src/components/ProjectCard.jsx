import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardLink from 'react-bootstrap/CardLink'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Image from 'react-bootstrap/Image';
import Tooltip from 'react-bootstrap/Tooltip';

export default function ProjectCard(props){

return (
    <>
     <Card  >
            <div style={{padding: 5, textAlign:'center'}}>
                <Button href={props.application.deployedLink} target="_blank" variant="info" >{props.application.title}</Button>
            </div>
            <Card.Img fluid variant="top" src={props.application.imageSrc} />
            <Card.Body>
                <Card.Text>
                    <div>
                        {props.application.description}
                    </div>
                
                    <div>
                        <a href={props.application.githubLink} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" style={{ color: 'black', fontSize: '2em', margin: '5px' }}></i>
                        </a>{" "}
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>     
    </>
)
}