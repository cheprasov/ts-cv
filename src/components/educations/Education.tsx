import React from 'react';
import { EducationInf } from '../../type/cv';
import { getPeriod } from '../../utils/dateUtils';
import ArticleBlock from '../article/ArticleBlock';

interface EducationProps {
    educations: EducationInf[];
}

const Educations = ({ educations }: EducationProps) => {

    const schools = educations.map(
        education => {
            const { name, field, degree, dateBeg, dateEnd, city, country } = education;
            const period = getPeriod(dateBeg, dateEnd);
            return (
                <ArticleBlock
                    key={name}
                    title={name}
                    subtitle={`${degree} in ${field}`}
                    info={`${period} / ${city}, ${country}`}
                />
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
