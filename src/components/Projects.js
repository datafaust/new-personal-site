import React, { Component } from 'react';
import ProjectCard from './smcomponents/ProjectCard';
import { Col, Row } from 'react-bootstrap';

import classes from './projects.module.css';

/**LOAD PROJECTS DATA */
import { projects } from '../assets/data/projects';


const Projects = (props) => {

    let cards = null;
    if (projects) {
      cards = (
            projects.map((project, i) => {
              return <ProjectCard
                        key={i}
                        image={project.image}
                        title={project.title}
                        text={project.text}
                        link={project.link}
                        tag={project.tag}
                    />
            })
      )
    }


    return (
            <Row id='projects'>
                <Col xs={4} className={classes.title}>Projects</Col>
                <Col className={classes.cards}>
                    <Row>
                        {cards}
                    </Row>
                </Col>
            </Row>
        );
}


export default Projects;