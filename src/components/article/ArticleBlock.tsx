import React from 'react';
import { convertToHTML } from '../../utils/reactUtils';
import Technologies from '../technologies/Technologies';
import { TechnologiesType } from '../../type/cv';

import './ArticleBlock.scss';

interface ArticleBlockProps {
    title: string;
    postTitle?: string;
    subtitle?: string;
    info?: string;
    logo?: string;
    text?: string | string[];
    technologies?: TechnologiesType[];
}

const ArticleBlock = ({ title, postTitle, subtitle, info, logo, text, technologies }: ArticleBlockProps) => {
    return (
        <article className="ArticleBlock">
            {logo && (
                <img className="ArticleBlock__logo" alt={logo} src={`./imgs/${logo}`} />
            )}
            <h3 className="ArticleBlock__title">
                {title}
                {postTitle ? (<> <span className="ArticleBlock__afterTitle">{postTitle}</span></>) : ''}
            </h3>
            <div className="ArticleBlock__subtitle">{subtitle}</div>
            <div className="ArticleBlock__info">{info}</div>
            {text && (
                <div className="ArticleBlock__description">{convertToHTML(text)}</div>
            )}
            {technologies && (
                <div className="ArticleBlock__technologies">
                    <span className="ArticleBlock__technologies__title">Tech Stack: </span>
                    <span className="ArticleBlock__technologies__list">
                        <Technologies technologies={technologies} />
                    </span>
                </div>
            )}
        </article>
    );
};

export default ArticleBlock;
