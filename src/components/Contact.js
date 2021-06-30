import React from 'react';
import { Row, Col } from 'react-bootstrap';
import classes from './contact.module.css';

const Contact = props => {

    const link = <a onClick={()=>window.open('mailto:faustolopez110@gmail.com?subject=Contact')} className={classes.link}>FaustoLopez110@gmail.com</a>;


    return (
        <Row id='contact' className={classes.container}>
            {/*TITLE*/}
    
            <Col xs={4}>
                <div className={classes.title}>Contact</div>
            </Col>

            
                <Col className={classes.summary}>
                    If you wish to contact me you can at {link}.
                </Col>
        
        </Row>
    );
};

export default Contact;
