import React from 'react';
import { 
    //Button,
     Card } from 'react-bootstrap'
import classes from './experienceCard.module.css'



const ExperienceCard = (props) => {

    return (
        <Card className={classes.cards}>
            <a href={props.link}>
                <Card.Body className={props.textClass} style = {{color:'black'}}>
                    <Card.Title>{props.title}</Card.Title>
                    <div className={classes.workplace}>{props.workplace}</div>
                    <div className={classes.time}>{props.time}</div>
                    <br/>
                    <Card.Text>
                        {props.text1}
                    </Card.Text>
                    <Card.Text>
                        {props.text2}
                    </Card.Text>
                    <Card.Text>
                        {props.text3}
                    </Card.Text>
                    <Card.Text>
                        {props.text4}
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    )
}

export default ExperienceCard;