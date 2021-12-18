import React from 'react';
import { joinClassNames } from '../../utils/stringUtils';

export interface ArticleLogoProps {
    children: string;
    right?: boolean;
}

const ArticleLogo: React.FunctionComponent<ArticleLogoProps> = ({ children, right = false }) => {
    const classNames = joinClassNames('Article__logo', right && 'Article__logo--right');
    return (
        <img
            className={classNames}
            alt={children}
            src={`./imgs/${children}`}
        />
    );
};

export default ArticleLogo;
