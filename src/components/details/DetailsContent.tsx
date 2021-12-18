import React from 'react';
import { joinClassNames } from '../../utils/stringUtils';

export interface DetailsSummaryProps {
    leftPadding?: boolean;
}

const DetailsSummary: React.FunctionComponent<DetailsSummaryProps> = ({ children, leftPadding = false }) => {
    const classNames = joinClassNames(
        'Details__content',
        leftPadding && 'Details__content--leftPadding',
    );

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

export default DetailsSummary;
