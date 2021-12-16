import React from 'react';
import { ExperienceInf } from '../../type/cv';
import Technologies from '../technologies/Technologies';
import { getPeriod } from '../../utils/dateUtils';

import './Experience.scss';
import ArticleBlock from '../article/ArticleBlock';
import { convertToHTML } from '../../utils/reactUtils';
import Period from '../date/Period';

interface ExperienceProps {
    experience: ExperienceInf;
}

const Experience = ({ experience }: ExperienceProps) => {

    const getDuties = (duties: string[]) => {
        if (!duties || duties.length === 0) {
            return null;
        }
        let content = duties.map(
            (line, index) => {
                return <li key={index}>{line}</li>;
            }
        );

        return (
            <div className="Experience__duties">
                <span className="Experience__duties__title">Duties: </span>
                <ul className="Experience__duties__ul">
                    {content}
                </ul>
            </div>
        );
    };

    const getTasks = (tasks: string[]): React.ReactElement | null => {
        if (!tasks || tasks.length === 0) {
            return null;
        }
        let content = tasks.map(
            (line, index) => {
                return <li key={index}>{line}</li>;
            }
        );

        return (
            <div className="tasks">
                <ul>
                    {content}
                </ul>
            </div>
        );
    };

    const {
        logo, title, company, city, country, visa, dateBeg, dateEnd, department, technologies, description, duties,
    } = experience;

    return (
        <article className="Experience">
            <ArticleBlock
                title={title}
                postTitle={(visa && `(under ${visa})`) || undefined}
                subtitle={`${company} / ${city}, ${country}`}
                info={<Period dateBeg={dateBeg} dateEnd={dateEnd} />}
                logo={logo}
                text={description}
                technologies={technologies}
            />
            {getDuties(duties) || ''}
        </article>
    );

};

export default Experience;
