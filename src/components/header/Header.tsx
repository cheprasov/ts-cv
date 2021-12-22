import React, { SyntheticEvent } from 'react';
import DateTime from '../../date/DateTime';
import { CVInf } from '../../type/cv';

import './Header.scss';

interface HeaderProps {
    cv: CVInf;
    onChangeContactVisibility?: (visibleContacts: boolean) => void;
    showContacts: boolean;
}

const Header = ({ cv, onChangeContactVisibility, showContacts }: HeaderProps) => {
    const onChange = (event: SyntheticEvent) => {
        const checked = (event.target as HTMLInputElement).checked;
        if (onChangeContactVisibility) {
            onChangeContactVisibility(!checked);
        }
    };

    const dateTime = new DateTime(cv.update);
    return (
        <div className="Header">
            <div className="Header__block">
                <a href="/Alexander_Cheprasov_CV.pdf" target="_blank" className="no-print">Download as PDF</a>
                {/*Last update: {dateTime.getFormatDate()}*/}
            </div>
            <div className="Header__block Header__block--center">
                { showContacts && (
                    <span className="print-only">
                        <a href="https://cv.cheprasov.com/">https://cv.cheprasov.com/</a>
                    </span>
                )}
            </div>
            <div className="Header__block Header__block--right">
                <label className="no-print">
                    <input type="checkbox" onChange={onChange} />
                    hide contacts for print
                </label>
            </div>
        </div>
    );
};

export default Header;
