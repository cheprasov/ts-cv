import React from 'react';

import './ArticleBlock.scss';
import { convertToHTML } from '../../utils/reactUtils';

interface ArticleBlockProps {
    title: string;
    postTitle?: string;
    subtitle?: string;
    info?: string;
    logo?: string;
    text?: string | string[];
}

const ArticleBlock = ({ title, postTitle, subtitle, info, logo, text }: ArticleBlockProps) => {
    return (
        <div className="ArticleBlock">
            {logo && (
                <img className="ArticleBlock__logo" alt={logo} src={`./imgs/${logo}`} />
            )}
            <h3 className="ArticleBlock__title">
                {title}
                {postTitle ? (<> <span className="ArticleBlock__postTitle">{postTitle}</span></>) : ''}
            </h3>
            <div className="ArticleBlock__subtitle">{subtitle}</div>
            <div className="ArticleBlock__info">{info}</div>
            {text && (
                <div className="ArticleBlock__description">{convertToHTML(text)}</div>
            )}
        </div>
    );
};

export default ArticleBlock;
