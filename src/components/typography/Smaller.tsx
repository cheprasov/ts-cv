import React from 'react';

import './Smaller.scss';

const Smaller: React.FunctionComponent = ({ children }) => {
    return (
        <span className="Smaller">{children}</span>
    );
}

export default Smaller;