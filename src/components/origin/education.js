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
                        {i ? (<hr />) : ''}
                        {
                            exp.logo ? (
                                <img className="logo" src={'./imgs/' + exp.logo} />
                            ) : ''
                        }
                        <h3 className="title">{exp.school}</h3>
                        <div className="degree">{exp.degree} in {exp.field}</div>
                        <div className="period">{this.getPeriod(exp.date_beg, exp.date_end)} / {exp.city}, {exp.country}</div>
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
