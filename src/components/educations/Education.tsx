import React from 'react';
import { EducationInf } from '../../type/cv';
import { getPeriod } from '../../utils/dateUtils';
import * as Article from '../article';
import Period from '../date/Period';

interface EducationProps {
    educations: EducationInf[];
}

const Educations = ({ educations }: EducationProps) => {

    const schools = educations.map(
        education => {
            const { name, field, degree, dateBeg, dateEnd, city, country } = education;
            return (
                <Article.Wrapper key={name}>
                    <Article.Title>
                        {degree} in {field}
                    </Article.Title>
                    <Article.Subtitle>
                        {name}, {city}, {country}, <Period dateBeg={dateBeg} dateEnd={dateEnd} />
                    </Article.Subtitle>
                </Article.Wrapper>
            );
        },
    );

    return (
        <section className="education">
            {schools}
        </section>
    );
};

export default Educations;
