import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardLink from 'react-bootstrap/CardLink'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Image from 'react-bootstrap/Image';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Project(props){

return (
    <>
     <Card >
            <Card.Img fluid variant="top" src={props.application.imageSrc} />
            <Card.Body>
            <Card.Title>{props.application.title}</Card.Title>
            <Card.Text>
            {props.application.description}
            <a href={props.application.githubLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" style={{ color: 'black', fontSize: '2em', margin: '5px' }}></i>
            </a>{" "}
            </Card.Text>
            <Button href={props.application.deployedLink} target="_blank" variant="primary" >Visit {props.application.title}</Button>
            </Card.Body>
        </Card>     
    </>
)
}


