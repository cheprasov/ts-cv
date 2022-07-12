import React from 'react';
import { joinClassNames } from '../../utils/stringUtils';

export interface DetailsSummaryProps extends React.PropsWithChildren {
    pointer?: boolean;
}

const DetailsSummary: React.FunctionComponent<DetailsSummaryProps> = ({ children, pointer = false }) => {
    return (
        <summary className={joinClassNames('Details__summary', pointer && 'Details__summary--pointer')}>
            {children}
        </summary>
    );
};

export default DetailsSummary;
