import React, { SyntheticEvent } from 'react';
import DateTime from '../../date/DateTime';
import { CVInf } from '../../type/cv';

import './Header.scss';

interface HeaderProps {
    cv: CVInf;
    onChangeContactVisibility?: (visibleContacts: boolean) => void;
}

const Header = ({ cv, onChangeContactVisibility }: HeaderProps) => {
    const onChange = (event: SyntheticEvent) => {
        const checked = (event.target as HTMLInputElement).checked;
        if (onChangeContactVisibility) {
            onChangeContactVisibility(!checked);
        }
    };

    const dateTime = new DateTime(cv.update);
    return (
        <div className="Header">
            {/*<div className="Header__block--left">Last update: {dateTime.getFormatDate()}</div>*/}
            <div className="Header__block--right no-print">
                <label>
                    <input type="checkbox" onChange={onChange} />
                    hide contacts for print
                </label>
            </div>
        </div>
    );
};

export default Header;
