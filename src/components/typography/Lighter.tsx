import React from 'react';

import './Lighter.scss';

const Lighter: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
    return (
        <span className="Lighter">{children}</span>
    );
}

export default Lighter;