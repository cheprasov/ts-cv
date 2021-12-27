import React, { useState, useEffect } from 'react';
import { ProjectInf } from '../../type/cv';
import DateTime from '../../date/DateTime';
import { replaceLexeme } from '../../utils/stringUtils';
import { lexemesSingleton } from '../../lexemes/Lexemes';

import * as Article from '../article';
import * as Details from '../details';
import Technologies from '../technologies/Technologies';
import SafeHtml from '../html/SafeHtml';
import Smaller from '../typography/Smaller';
import Lighter from '../typography/Lighter';

interface ProjectProps {
    project: ProjectInf;
}

const Project = ({ project }: ProjectProps) => {
    const { title, subTitle, description, date, imageUrl, technologies } = project;
    const projectDate = (date && new DateTime(date).getFormatDate('%F %Y')) || undefined;
    const [subTitleState, setSubTitleState] = useState<string>('');

    useEffect(() => {
        if (subTitle) {
            replaceLexeme(lexemesSingleton, subTitle).then(value => setSubTitleState(value));
        }
    }, [projectDate]);

    return (
        <Article.Wrapper>
            <Details.Wrapper open>
                <Details.Summary pointer>
                    <Article.Logo>{imageUrl}</Article.Logo>
                    <Article.Title>
                        {title}
                    </Article.Title>
                    <Article.Subtitle>
                        {subTitleState}
                    </Article.Subtitle>
                </Details.Summary>
                <Details.Content>
                    <Article.Content>
                        { technologies && <Technologies technologies={technologies} showTitle /> }
                        <SafeHtml>{description}</SafeHtml>
                    </Article.Content>
                </Details.Content>
            </Details.Wrapper>
        </Article.Wrapper>
    );
};

export default Project;
