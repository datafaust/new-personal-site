import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';

import classes from './about.module.css';

/**IMAGE LOADING */
import gmail from '../assets/gmail.png';
import github from '../assets/github.png';
import cv from '../assets/curriculum-vitae.png';
import linkedin from '../assets/linkedin.png';
import gitlab from '../assets/gitlab.png'



const About = props => {
    return (
        <Container className={classes.main} id='about'>
            
            {/*TITLE*/}
            <Row>
            <Col>
                <div className={classes.title}>About Me</div>
            </Col>
            </Row>
            
            {/**SUMMARY */}
            <Row>
            <Col>
                <paragraph className={classes.summary}>{'I am a creative and resourceful data engineer and software developer. Currently, I am the Director of Data Engineering and Analytics at the Taxi & Limousine Commission of the New York City. My work involves developing and automating big data processes, building and interacting with databases, creating apps and dashboards for TLC and public, as well as conducting high level research to empower impactful legislation in the area of city transportation. I am also a co-founder of VeryCool Studio - an app development, data analysis, and rapid prototyping company. In my spare time I work on data projects, repair motorcycles and make movies.'}</paragraph>
            </Col>
            </Row>
            <br/>
            {/**PANEL */}
            <Row>
                <Col>
                <div className={classes.panel}>
                    <a ><Image className={classes.icon} src={gmail} height={40} width={40} onClick={()=>window.open('mailto:faustolopez110@gmail.com?subject=Contact')} /></a>
                    <a href='https://www.linkedin.com/in/lopezfausto' target='_blank'><Image className={classes.icon}  src={linkedin} height={40} width={40} /></a>
                    <a href='https://github.com/datafaust' target='_blank'><Image className={classes.icon}  src={github} height={40} width={40} /></a>
                    <a href='https://gitlab.com/ulysses' target='_blank'><Image className={classes.icon}  src={gitlab} height={40} width={40} /></a>
                    <a><Image className={classes.icon}  src={cv} height={40} width={40} /></a>
                </div>
                </Col>
            </Row>
        </Container>
    );
};


export default About;