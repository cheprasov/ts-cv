import React from 'react';

const DetailsSummary: React.FunctionComponent = ({ children }) => {
    return (
        <div className="Details__content">
            {children}
        </div>
    );
};

export default DetailsSummary;
