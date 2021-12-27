import React from 'react';

const DetailsSummaryPointer: React.FunctionComponent = ({ children }) => {
    return (
        <span className="Details__summaryPointer">
            {children}
        </span>
    );
};

export default DetailsSummaryPointer;
