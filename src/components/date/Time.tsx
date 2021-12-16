import React from 'react';
import DateTime from '../../date/DateTime';

export interface TimeProps {
    dates: string | [string] | [string, string];
}

const Time: React.FunctionComponent<TimeProps> = ({ dates }) => {
    const dateTags = (Array.isArray(dates) ? dates : [dates]).map(dt => {
        const dateTime = new DateTime(dt);
        return (
            <time
                dateTime={dateTime.toISOString()}
            >
                {dateTime.getFormatDate('%F %Y')}
            </time>
        );
    });

    return (
        <>
            dateTags.join(', ')
        </>
    );
};

export default Time;