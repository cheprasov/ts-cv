import React, { useMemo } from 'react';
import { getPeriod } from '../../utils/dateUtils';

export interface PeriodProps {
    dateBeg: string;
    dateEnd: string;
}

const Period: React.FunctionComponent<PeriodProps> = ({ dateBeg, dateEnd }) => {

    const [ formatDate1, formatDate2, period ] = useMemo(() => {
        return getPeriod(dateBeg, dateEnd, true);
    }, [ dateBeg, dateEnd ]);

    return (
        <>
            <time dateTime={dateBeg}>{ formatDate1 }</time>
            {` – `}
            <time dateTime={dateEnd}>{ formatDate2 }</time>
            { period }
        </>
    );
};

export default Period;