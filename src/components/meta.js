import React from 'react';

import DateTime from './../utils/date-time.js';

export default class Meta extends React.Component {

    onHideCheckbox(e) {
        this.props.application.setHideContacts(e.target.checked)
    }

    render() {
        const hideContacts = this.props.config.hideContacts || false;
        const DT = new DateTime(this.props.cv.update);
        const link = this.props.cv.links.cv_pdf;
        return (
            <div className="meta">
                <div className="meta-block left">Last update: {DT.getFormatDate()}</div>
                {hideContacts ? '' : <div className="meta-block left">CV PDF link: <a target="_blank" href={link}>{link}</a></div>}
                <div className="meta-block right no-print">
                    <input type="checkbox" onChange={(e) => {this.onHideCheckbox(e);}} />hide contacts
                </div>
            </div>
        );
    }
}
