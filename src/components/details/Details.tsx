import React from 'react';
import { joinClassNames } from '../../utils/stringUtils';

import './Details.scss';

export interface DetailsProps {
    className?: string;
    open?: boolean
}

const Details: React.FunctionComponent<DetailsProps> = ({ children, className = '', open = false }) => {
    return (
        <details
            className={joinClassNames('Details', className)}
            open={open}
        >
            {children}
        </details>
    );
};

export default Details;
