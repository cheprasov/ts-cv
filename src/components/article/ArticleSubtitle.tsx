import React from 'react';

const ArticleSubtitle: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="Article__subtitle">{children}</div>
    );
};

export default ArticleSubtitle;
