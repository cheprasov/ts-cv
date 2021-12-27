import React from 'react';
import DateTime from '../../date/DateTime';

export interface TimeProps {
    dates: string | [string] | string[];
    sep?: string;
}

const Time: React.FunctionComponent<TimeProps> = ({ dates, sep = ', ' }) => {
    const dateTags: (React.ReactElement | string)[] = [];
    (Array.isArray(dates) ? dates : [dates]).forEach((dt, index) => {
        if (index !== 0) {
            dateTags.push(sep);
        }
        const dateTime = new DateTime(dt);
        dateTags.push(
            <time
                key={dt}
                dateTime={dateTime.toISOString()}
            >
                {dateTime.getFormatDate('%F %Y')}
            </time>
        );
    });

    return (
        <>
            {dateTags}
        </>
    );
};

export default Time;