import React from 'react';

const ArticleTitle: React.FunctionComponent = ({ children }) => {
    return (
        <h3 className="Article__title">
            {children}
        </h3>
    );
};

export default ArticleTitle;
