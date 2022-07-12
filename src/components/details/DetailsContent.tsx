import React from 'react';
import { joinClassNames } from '../../utils/stringUtils';

export interface DetailsSummaryProps extends React.PropsWithChildren {}

const DetailsSummary: React.FunctionComponent<DetailsSummaryProps> = ({ children }) => {
    const classNames = joinClassNames(
        'Details__content',
    );

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

export default DetailsSummary;
