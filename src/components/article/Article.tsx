import React from 'react';

import { joinClassNames } from '../../utils/stringUtils';

import './Article.scss'

export interface ArticleProps extends React.PropsWithChildren {
    className?: string;
}

const Article: React.FunctionComponent<ArticleProps> = ({ className = '', children }) => {
    return (
        <article className={joinClassNames('Article', className)}>
            {children}
        </article>
    );
};

export default Article;