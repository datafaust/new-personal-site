import React from 'react';
import ExperienceCard from './smcomponents/ExperienceCard';


const Experience = props => {
    return (
        <div>
            <div>Experience</div>
            <div>
                <ExperienceCard 
                    title={'Director of Data Engineering & Analytics'}
                    workplace={'Taxi & Limousine Commission of New York City'}
                    time={'Sep 2019 - Present'}
                    text1={'Design and build schema and stored procedures for new SQL Server analytics database.'}
                    text2={'Script Python, R and SQL queries for data exploration, data validation and ETL procedures.'}
                    text3={'Develop data visualization plan coordinating analysts to build SSMS reports increasing data access across agency.'}
                    text4={'Collaborate with various business users to translate business requirements into reports and actionable insights.'}
                />

                <ExperienceCard 
                    title={'Data & Analytics Manager'}
                    workplace={'Taxi & Limousine Commission of New York City'}
                    time={'Sep 2019 - Present'}
                    text1={'Design and build schema and stored procedures for new SQL Server analytics database.'}
                    text2={'Script Python, R and SQL queries for data exploration, data validation and ETL procedures.'}
                    text3={'Develop data visualization plan coordinating analysts to build SSMS reports increasing data access across agency.'}
                    text4={'Collaborate with various business users to translate business requirements into reports and actionable insights.'}
                />
            </div>
        </div>
    );
};


export default Experience;