import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import classes from './about.module.css';
import gmail from '../assets/gmail.png';



const About = props => {
    return (
        <Row className={classes.main} id='about'>
            <Col>
                {/*TITLE*/}
                <div className={classes.title}>About Me</div>
                <div className={classes.summary}>blah blah blah blah</div>
                <div className={classes.panel}>
                    <Image className={classes.icon} src={gmail} height={40} width={40} />
                    <Image className={classes.icon}  src={gmail} height={40} width={40} />
                    <Image className={classes.icon}  src={gmail} height={40} width={40} />
                    <Image className={classes.icon}  src={gmail} height={40} width={40} />
                </div>
            </Col>
        </Row>
    );
};


export default About;