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
            <Details.Wrapper open>
                <Details.Summary pointer>
                    {logo && <Article.Logo right>{logo}</Article.Logo>}
                    <Article.Title>
                        {title} <Lighter>at</Lighter> {company}
                    </Article.Title>
                    <Article.Subtitle>
                        <Period dateBeg={dateBeg} dateEnd={dateEnd} showInterval /> / {city}, {country}
                    </Article.Subtitle>
                </Details.Summary>
                <Details.Content>
                    <Article.Content>
                        {technologies && <Technologies technologies={technologies} showTitle />}
                        <p className="Experience__description">{description}</p>
                        <Duties duties={duties} />
                    </Article.Content>
                </Details.Content>
            </Details.Wrapper>
        </Article.Wrapper>
    );

};

export default Experience;
