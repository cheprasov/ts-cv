import React from 'react';

import DateTime from '/SRC/utils/date-time.js';

export default class Header extends React.Component {

    onHideCheckbox(e) {
        this.props.application.setHideContacts(e.target.checked)
    }

    render() {
        const DT = new DateTime(this.props.cv.update);
        return (
            <div className="header">
                <div className="header-left">Last update: {DT.getFormatDate()}</div>
                <div className="header-right no-print">
                    <input type="checkbox" onChange={(e) => {this.onHideCheckbox(e);}} />hide contacts
                </div>
            </div>
        );
    }
}
