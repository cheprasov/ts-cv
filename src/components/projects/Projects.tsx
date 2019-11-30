import React, { Fragment } from 'react';
import { ProjectInf } from '../../type/cv';
import Project from './Project';

import './Projects.scss';

interface ProjectsProps {
    projects: ProjectInf[];
}

const Projects = ({ projects }: ProjectsProps) => {
    const content = projects.map((project, index) => {
        const { title } = project;
        return (
            <Fragment key={title}>
                {index > 0 && <hr className="Projects__hr" /> }
                <Project project={project} />
            </Fragment>
        );
    });

    return (
        <div className="Projects">
            {content}
        </div>
    );
};

export default Projects;
