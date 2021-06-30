import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

import classes from './presentations.module.css';

/**CARD  */
const slides = () =>{
    return (
        <div>
            <div>TITLE</div>
            <div>summary</div>
            <div>date and time</div>
        </div>
    )
}

const  Presentations = props => {
    return (

            <Row className={classes.container}>
                <Col xs={4} className={classes.title}>
                    <div>Presentations</div>
                </Col>
                <Col >
                   
                </Col>
            </Row>
   
   
    )
}


export default Presentations

