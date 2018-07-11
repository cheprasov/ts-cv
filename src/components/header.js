import React from 'react';

import DateTime from '/SRC/utils/date-time.js';

export default class Header extends React.Component {

    onHideCheckbox(e) {
        this.props.application.setHideContacts(e.target.checked)
    }

    render() {
        const hideContacts = this.props.config.hideContacts || false;
        const DT = new DateTime(this.props.cv.update);
        const link = this.props.cv.links.cv_pdf;
        return (
            <div className="header">
                <div className="header-block left">Last update: {DT.getFormatDate()}</div>
                {hideContacts ? '' : <div className="header-block left">CV PDF link: <a target="_blank" href={link}>{link}</a></div>}
                <div className="header-block right no-print">
                    <input type="checkbox" onChange={(e) => {this.onHideCheckbox(e);}} />hide contacts
                </div>
            </div>
        );
    }
}
