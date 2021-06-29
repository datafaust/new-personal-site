import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Scroll from 'react-scroll';
import classes from './footer.module.css';


import arrow from '../assets/upload.png'

const Link = Scroll.Link;

const Footer = props => {


    return (
        <Row>
            <Col>
            </Col>
            <Col>
            </Col>
            <Col className={classes.text}>
                <text>Built by Fausto Lopez in React</text>
            </Col>
            <Col className={classes.imageContainer}>
            <Link activeClass="" to="about" spy={true} smooth={true} duration={500} offset={-60}>
            <Image className={classes.icon} src={arrow} height={50} width={50}/>
            </Link>
                
            </Col>
        </Row>
    );
};

export default Footer;