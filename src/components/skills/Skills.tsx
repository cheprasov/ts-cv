import React from 'react';
import Technologies from '../technologies/Technologies';
import { TechnologiesType } from '../../type/cv';

interface SkillsProps {
    technologies: TechnologiesType[];
}

const Skills = ({ technologies }: SkillsProps) => {

    return (
        <div className="Skills">
            <Technologies technologies={technologies} />
        </div>
    );

};

export default Skills;
