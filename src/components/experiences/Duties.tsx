import React from 'react';
import SafeHtml from '../html/SafeHtml';

import './Duties.scss';

export interface DutiesProps {
    duties: string[];
}

const Duties: React.FunctionComponent<DutiesProps> = ({ duties }) => {
    if (!duties || duties.length === 0) {
        return null;
    }

    const content = duties.map((line, index) => (<li key={index}><SafeHtml>{line}</SafeHtml></li>));

    return (
        <div className="Duties">
            <span className="Duties__title">Duties & Achievements: </span>
            <ul className="Duties__ul">
                {content}
            </ul>
        </div>
    );
}

export default Duties;