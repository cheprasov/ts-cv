import React from 'react';

import Technologies from '../technologies/Technologies';
import Period from '../date/Period';
import Lighter from '../typography/Lighter';
import Duties from './Duties';
import * as Article from '../article';
import * as Details from '../details';
import type { ExperienceInf } from '../../type/cv';

import './Experience.scss';

interface ExperienceProps {
    experience: ExperienceInf;
}

const Experience = ({ experience }: ExperienceProps) => {
    const {
        logo, title, company, city, country, dateBeg, dateEnd, technologies, description, duties,
    } = experience;

    return (
        <Article.Wrapper className="Experience">
            <Details.Wrapper>
                <Details.Summary>
                    {logo && <Article.Logo>{logo}</Article.Logo>}
                    <Article.Title>
                        {title} <Lighter>at</Lighter> {company}
                    </Article.Title>
                    <Article.Subtitle>
                        <Period dateBeg={dateBeg} dateEnd={dateEnd} /> / {city}, {country}
                    </Article.Subtitle>
                </Details.Summary>
                <Details.Content>
                    <Article.Content>
                        {description}
                        {technologies && (
                            <div className="Experience__techStack">
                                <b>Tech Stack: </b>
                                <Technologies technologies={technologies} />
                            </div>
                        )}
                        <Duties duties={duties} />
                    </Article.Content>
                </Details.Content>
            </Details.Wrapper>
        </Article.Wrapper>
    );

};

export default Experience;
