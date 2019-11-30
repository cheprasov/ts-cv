import React from 'react';
import { CVInf } from '../../type/cv';

interface SummaryProps {
    cv: CVInf;
}

const Summary = ({ cv }: SummaryProps) => {

    const getInfo = (): React.ReactElement[] => {
        return cv.about.map(
            (line, index) => {
                return (
                    <p key={index}>{line}</p>
                );
            }
        );
    };

    return (
        <div className="Summary">
            {getInfo()}
        </div>
    );
};

export default Summary;
