import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ExperienceCard from './smcomponents/ExperienceCard';

import classes from './experience.module.css';


const Experience = props => {
    return (
        <Row>
            <Col xs={4} className={classes.title}>Experience</Col>
            <Col className={classes.cards}>
                <ExperienceCard 
                    title={'Director of Data Engineering & Analytics'}
                    workplace={'Taxi & Limousine Commission of New York City'}
                    time={'Sep 2019 - Present'}
                    text1={'Design and build schema and stored procedures for new SQL Server analytics database.'}
                    text2={'Script Python, R and SQL queries for data exploration, data validation and ETL procedures.'}
                    text3={'Develop data visualization plan coordinating analysts to build SSMS reports increasing data access across agency.'}
                    text4={'Collaborate with various business users to translate business requirements into reports and actionable insights.'}
                />
                <br/>
                <ExperienceCard 
                    title={'Data & Analytics Manager'}
                    workplace={'Taxi & Limousine Commission of New York City'}
                    time={'Sep 2019 - Present'}
                    text1={'Design and build schema and stored procedures for new SQL Server analytics database.'}
                    text2={'Script Python, R and SQL queries for data exploration, data validation and ETL procedures.'}
                    text3={'Develop data visualization plan coordinating analysts to build SSMS reports increasing data access across agency.'}
                    text4={'Collaborate with various business users to translate business requirements into reports and actionable insights.'}
                />
                <br/>
                <ExperienceCard 
                    title={'Data & Analytics Manager'}
                    workplace={'Taxi & Limousine Commission of New York City'}
                    time={'Sep 2019 - Present'}
                    text1={'Design and build schema and stored procedures for new SQL Server analytics database.'}
                    text2={'Script Python, R and SQL queries for data exploration, data validation and ETL procedures.'}
                    text3={'Develop data visualization plan coordinating analysts to build SSMS reports increasing data access across agency.'}
                    text4={'Collaborate with various business users to translate business requirements into reports and actionable insights.'}
                />
            </Col>
        </Row>
    );
};


export default Experience;