import React, { Component } from 'react';
import ProjectCard from './smcomponents/ProjectCard';
import { Col, Row } from 'react-bootstrap';

import  datahub from '../assets/datahub.png';
import classes from './projects.module.css';

class Projects extends Component {
    render() {
        return (
            <Row id='projects'>
                <Col xs={4} className={classes.title}>Projects</Col>
                <Col className={classes.cards}>
                    <Row>
                    <ProjectCard
                        image={datahub}
                        title={'project 1'}
                        text={'blah blah blah'}
                    />
                    <ProjectCard
                        image={datahub}
                        title={'project 1'}
                        text={'blah blah blah'}
                    />
                    <ProjectCard
                        image={datahub}
                        title={'project 1'}
                        text={'blah blah blah'}
                    />
                    <ProjectCard
                        image={datahub}
                        title={'project 1'}
                        text={'blah blah blah'}
                    />
                    <ProjectCard
                        image={datahub}
                        title={'project 1'}
                        text={'blah blah blah'}
                    />
                    <ProjectCard
                        image={datahub}
                        title={'project 1'}
                        text={'blah blah blah'}
                    />
                    </Row>
                </Col>
            </Row>
        );
    }
}


export default Projects;