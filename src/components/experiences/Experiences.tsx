import React, { Fragment } from 'react';
import { ExperienceInf } from '../../type/cv';
import Experience from './Experience';

import './Experiences.scss';

interface ExperiencesProps {
    experiences: ExperienceInf[];
}

const Experiences = ({ experiences }: ExperiencesProps) => {

    const exp = experiences.map((experience, index) => (
        <Fragment key={experience.company}>
            {index > 0 && <hr className="Experiences__hr" /> }
            <Experience experience={experience} />
        </Fragment>
    ));

    return (
        <div className="Experiences">
            {exp}
        </div>
    );
};

export default Experiences;
