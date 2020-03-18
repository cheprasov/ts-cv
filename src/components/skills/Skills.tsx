import React from 'react';
import Technologies from '../technologies/Technologies';
import { TechnologiesType } from '../../type/cv';

interface SkillsProps {
    technologies: TechnologiesType[];
}

const Skills = ({ technologies }: SkillsProps) => {

    return (
        <article className="Skills">
            <Technologies technologies={technologies} />
        </article>
    );

};

export default Skills;
