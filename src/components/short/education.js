import React from 'react';

import DateTime from '/SRC/utils/date-time.js';

let keyI = 0;

export default class Education extends React.Component {

    getPeriod(beg, end) {
        let DateTime1 = new DateTime(beg);
        let date1 = DateTime1.getFormatDate('%Y');

        let DateTime2 = new DateTime(end);
        let date2 = DateTime2.getFormatDate('%Y');

        return `${date1} – ${date2}`;
    }

    render() {
        let education = this.props.data;
        let schools = education.map(
            (exp, i) => {
                return (
                    <div className="school" key={'key-edu-' + (keyI++)}>
                        <h3 className="title">{exp.degree} in {exp.field}</h3>
                        <div className="period">{exp.school}, {this.getPeriod(exp.date_beg, exp.date_end)}</div>
                    </div>
                );
            }
        );

        return (
            <div className="education">
                {schools}
            </div>
        );
    }
}
