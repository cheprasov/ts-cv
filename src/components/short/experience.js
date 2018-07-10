import React from 'react';

import DateTime from '/SRC/utils/date-time.js';
import { prepare } from '/SRC/utils/string-utils.js';

import Technologies from './../origin/technologies.js';

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

        return `${date1} – ${date2}`;
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
            <span className="technologies">
                Technologies: <span className="technologies-list">{Technologies.getLines(technologies).join(', ')}</span>
            </span>
        );
    }

    render() {
        let experiences = this.props.data;
        let companies = experiences.map(
            (exp, i) => {
                return (
                    <div className="work" key={'key-exp-' + (keyI++)}>
                        <h3 className="title">
                            {exp.title} at {exp.company}, {exp.city}, {exp.country}, {this.getPeriod(exp.date_beg, exp.date_end)}
                        </h3>
                        {exp.department}. {this.getTechnologies(exp.technologies) || ''}
                        {this.getDuties(exp.duties) || ''}
                        {this.getTasks(exp.tasks) || ''}
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
