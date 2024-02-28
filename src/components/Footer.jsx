import React from 'react';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#E7D2CC', textAlign: 'center', padding: '5px' }}>
            <Col>
                <a href="https://github.com/lalitakapadia" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" style={{ color: 'black', fontSize: '2em', margin: '5px' }}></i>
                </a>{" "}
                <a href="https://www.linkedin.com/in/lalita-kapadia-5a5924290/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" style={{ color: 'black', fontSize: '2em', margin: '5px' }}></i>
                </a>{" "}
            </Col>           
        </footer>
    )
}