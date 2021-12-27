import React from 'react';

import './Duties.scss';

export interface DutiesProps {
    duties: string[];
}

const Duties: React.FunctionComponent<DutiesProps> = ({ duties }) => {
    if (!duties || duties.length === 0) {
        return null;
    }

    const content = duties.map((line, index) => (<li key={index}>{line}</li>));

    return (
        <div className="Duties">
            <span className="Duties__title">Duties: </span>
            <ul className="Duties__ul">
                {content}
            </ul>
        </div>
    );
}

export default Duties;