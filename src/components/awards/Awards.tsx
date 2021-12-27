import React, { Fragment } from 'react';
import { AwardInf } from '../../type/cv';
import Award from './Award';

import './Awards.scss';

interface AwardsProps {
    awards: AwardInf[];
}

const Awards = ({ awards }: AwardsProps) => {
    const content = awards.map((award, index) => {
        return (
            <Fragment key={index}>
                {index > 0 && <hr className="Awards__hr" /> }
                <Award award={award} />
            </Fragment>
        );
    });

    return (
        <div className="Awards">
            {content}
        </div>
    );
};

export default Awards;
