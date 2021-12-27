import React from 'react';
import { CVInf } from '../../type/cv';
import { replaceVars } from '../../utils/stringUtils';

interface SummaryProps {
    cv: CVInf;
}

const Summary = ({ cv }: SummaryProps) => {

    const getInfo = (): React.ReactElement[] => {
        return cv.about.map((line, index) => <p key={index}>{replaceVars(line)}</p>);
    };

    return (
        <>
            {getInfo()}
        </>
    );
};

export default Summary;
