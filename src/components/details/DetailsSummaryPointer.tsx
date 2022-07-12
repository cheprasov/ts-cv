import React from 'react';

const DetailsSummaryPointer: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
    return (
        <span className="Details__summaryPointer">
            {children}
        </span>
    );
};

export default DetailsSummaryPointer;
