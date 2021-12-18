import React from 'react';

const DetailsSummary: React.FunctionComponent = ({ children }) => {
    return (
        <summary className="Details__summary">
            {children}
        </summary>
    );
};

export default DetailsSummary;
