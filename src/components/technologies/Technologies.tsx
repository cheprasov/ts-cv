import React from 'react';
import { TechnologiesType } from '../../type/cv';

interface TechnologiesProps {
    technologies: TechnologiesType[];
}

const Technologies = ({ technologies }: TechnologiesProps) => {

    const getLine = (techs: TechnologiesType) => {
        let line = [];
        for (let t of techs) {
            if (Array.isArray(t)) {
                line[line.length - 1] += ` (${t.join(', ')})`;
            } else {
                line.push(t);
            }
        }
        return line.join(', ');
    };

    const getLines = (techs: TechnologiesType[]) => {
        const lines = [];
        for (let tech of techs) {
            let line = getLine(tech);
            if (!line) {
                continue;
            }
            lines.push(line);
        }
        return lines;
    };


    const list = getLines(technologies).join(', ');

    return (<>{list}</>);
};

export default Technologies;
