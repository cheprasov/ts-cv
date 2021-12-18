import React from 'react';

export interface ArticleLogoProps {
    children: string;
}

const ArticleLogo: React.FunctionComponent<ArticleLogoProps> = ({ children }) => {
    return (
        <img className="Article__logo" alt={children} src={`./imgs/${children}`} />
    );
};

export default ArticleLogo;
