import React from 'react';
import type { TechnologiesType, TechnologyType } from '../../type/cv';

import './Technologies.scss';

interface TechnologiesProps {
    technologies: TechnologiesType[];
    showTitle?: boolean;
}

const Technologies = ({ technologies, showTitle = false }: TechnologiesProps) => {
    const getLine = (techs: TechnologyType[]): string => {
        return techs.reduce((list, tech) => {
            if (Array.isArray(tech)) {
                list[list.length - 1] += ` (${tech.join(', ')})`;
            } else {
                list.push(tech);
            }
            return list;
        }, [] as TechnologyType[]).join(', ');
    };

    const getLines = (techs: TechnologiesType[]): string[] => {
        return techs.reduce((lines, tech) => {
            const line = getLine(tech);
            if (line) {
                lines.push(line);
            }
            return lines;
        }, []) as string[];
    };

    const list = getLines(technologies).join(', ');

    return (
        <div className="Technologies">
            { showTitle && (
                <span className="Technologies__title">
                    Tech Stack:
                </span>
            )}
            {list}.
        </div>
    );
};

export default Technologies;
