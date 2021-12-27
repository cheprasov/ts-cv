import React from 'react';

const ArticleContent: React.FunctionComponent = ({ children }) => {
    return (
        <div className="Article__content">{children}</div>
    );
};

export default ArticleContent;
