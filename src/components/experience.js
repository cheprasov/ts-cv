import React from 'react';

import Technologies from './technologies.js';
import DateTime from './../utils/date-time.js';
import StringUtils from './../utils/string-utils.js';

let keyI = 0;

export default class Experience extends React.Component {

    getPeriod(beg, end) {
        let DateTime1 = new DateTime(beg);
        let date1 = DateTime1.getFormatDate('%F %Y');

        let DateTime2, date2;
        if (end === 'now') {
            DateTime2 = new DateTime();
            date2 = 'Present';
        } else {
            DateTime2 = new DateTime(end);
            date2 = DateTime2.getFormatDate('%F %Y');
        }

        let period = DateTime1.getPeriod(DateTime2);

        return `${date1} – ${date2} (${period})`;
    }

    getDuties(duties) {
        if (!duties || duties.length === 0) {
            return null;
        }
        let content = duties.map(
            (line) => {
                return <li key={'exp-' + (keyI++)}>{line}</li>;
            }
        );

        return (
            <div className="duties">
                <span>Main duties:</span>
                <ul>
                    {content}
                </ul>
            </div>
        );
    }

    getTasks(tasks) {
        if (!tasks || tasks.length === 0) {
            return null;
        }
        let content = tasks.map(
            (line) => {
                return <li key={'exp-' + (keyI++)}>{line}</li>;
            }
        );

        return (
            <div className="tasks">
                <span>Most interesting tasks: </span>
                <ul>
                    {content}
                </ul>
            </div>
        );
    }

    getTechnologies(technologies) {
        if (!technologies || technologies.length === 0) {
            return null;
        }
        return (
            <div className="tasks">
                <span>Used technologies:</span>
                <Technologies data={technologies} />
            </div>
        );
    }

    render() {
        let experiences = this.props.data;
        let companies = experiences.map(
            (exp, i) => {

                return (
                    <div className="work" key={'key-exp-' + (keyI++)}>
                        {i ? (<hr />) : ''}
                        {
                            exp.logo ? (
                                <img className="logo" src={'./imgs/' + exp.logo} />
                            ) : ''
                        }
                        <h3 className="title">
                            {exp.title}
                            {exp.visa ? (<span className="visa"> (under {exp.visa})</span>) : ''}
                        </h3>
                        <div className="company">{exp.company} / {exp.city}, {exp.country}</div>
                        <div className="period">{this.getPeriod(exp.date_beg, exp.date_end)}</div>
                        <div className="description"
                             dangerouslySetInnerHTML={{__html: StringUtils.prepare(exp.description)}}
                        />
                        {this.getDuties(exp.duties) || ''}
                        {this.getTasks(exp.tasks) || ''}
                        {this.getTechnologies(exp.technologies) || ''}
                    </div>
                );
            }
        );

        return (
            <div className="experience">
                {companies}
            </div>
        );
    }
}
