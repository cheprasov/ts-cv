import React, { useState, useEffect } from 'react';
import { ProjectInf } from '../../type/cv';
import ArticleBlock from '../article/ArticleBlock';
import DateTime from '../../date/DateTime';
import { replaceLexeme } from '../../utils/stringUtils';
import { lexemesSingleton } from '../../lexemes/Lexemes';

interface ProjectProps {
    project: ProjectInf;
}

const Project = ({ project }: ProjectProps) => {
    const { title, postTitle, description, date, imageUrl, technologies } = project;
    const projectDate = (date && new DateTime(date).getFormatDate('%F %Y')) || undefined;
    const [postTitleState, setPostTitleState] = useState<string>('');

    useEffect(() => {
        if (postTitle) {
            replaceLexeme(lexemesSingleton, postTitle).then(value => setPostTitleState(value));
        }
    }, [projectDate]);

    return (
        <div className="Project" key={title}>
            <ArticleBlock
                title={title}
                postTitle={postTitleState}
                info={projectDate}
                logo={imageUrl}
                text={description}
                technologies={technologies}
            />
        </div>
    );
};

export default Project;
