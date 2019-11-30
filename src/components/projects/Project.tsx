import React from 'react';
import { ProjectInf } from '../../type/cv';
import ArticleBlock from '../article/ArticleBlock';
import DateTime from '../../date/DateTime';
import Technologies from '../technologies/Technologies';

interface ProjectProps {
    project: ProjectInf;
}

const Project = ({ project }: ProjectProps) => {

    const { title, postTitle, description, date, imageUrl, technologies } = project;
    const projectDate = (date && new DateTime(date).getFormatDate('%F %Y')) || undefined;
    return (
        <div className="Project" key={title}>
            <ArticleBlock
                title={title}
                postTitle={postTitle}
                info={projectDate}
                logo={imageUrl}
                text={description}
            />
            {technologies && (
                <div className="Project__technologies">
                    <>Technologies: </>
                    <Technologies technologies={technologies} />
                </div>
            )}
        </div>
    );
};

export default Project;
