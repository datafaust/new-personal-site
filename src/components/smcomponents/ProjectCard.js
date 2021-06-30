import React from 'react';
import { 
    //Button,
     Card } from 'react-bootstrap'
import classes from './projectCard.module.css'



const ProjectCard = (props) => {

    return (
        <Card className={classes.cards} >
            <a href={props.link} target="_blank">
                <Card.Img variant="top" src={props.image} className = {classes.image}/>
                <Card.Body style = {{color:'black'}}>
                    <Card.Title className={classes.title}>{props.title}</Card.Title>
                    <Card.Text className={classes.summary}>
                        {props.text}
                    </Card.Text>
                </Card.Body>
            </a>
        </Card>
    )
}

export default ProjectCard;

