import React from 'react';
import { ExperienceInf } from '../../type/cv';
import Technologies from '../technologies/Technologies';
import { getPeriod } from '../../utils/dateUtils';

import './Experience.scss';
import ArticleBlock from '../article/ArticleBlock';
import { convertToHTML } from '../../utils/reactUtils';

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

    const period = getPeriod(dateBeg, dateEnd, true);

    return (
        <div className="Experience">
            <ArticleBlock
                title={title}
                postTitle={(visa && `(under ${visa})`) || undefined}
                subtitle={`${company} / ${city}, ${country}`}
                info={period}
                logo={logo}
            />
            <div className="Experience__description">
                {convertToHTML(description)}
            </div>

            <span className="Experience__technologies">
                <>Technologies: </>
                <span className="Experience__technologies__list">
                    <Technologies technologies={technologies} />
                </span>
            </span>
            {getDuties(duties) || ''}
        </div>
    );

};

export default Experience;
