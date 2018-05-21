import React from 'react';

import DateTime from './../utils/date-time.js';

export default class Meta extends React.Component {
    render() {
        let DT = new DateTime(this.props.cv.update);
        let link = this.props.cv.links.cv_pdf;
        return (
            <div className="meta">
                <div className="meta-block left">Last update: {DT.getFormatDate()}</div>
                <div className="meta-block right">CV PDF link: <a target="_blank" href={link}>{link}</a></div>
            </div>
        );
    }
}
