import React from 'react';
import { TechnologiesType, TechnologyType } from '../../type/cv';

interface TechnologiesProps {
    technologies: TechnologiesType[];
}

const Technologies = ({ technologies }: TechnologiesProps) => {
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
    return (<>{list}.</>);
};

export default Technologies;
