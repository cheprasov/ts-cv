import React from 'react';

const ArticleContent: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="Article__content">{children}</div>
    );
};

export default ArticleContent;
