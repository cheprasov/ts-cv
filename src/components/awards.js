import React from 'react';

import DateTime from './../utils/date-time.js';
import StringUtils from './../utils/string-utils.js';

let keyI = 0;

export default class Awards extends React.Component {
    render() {
        let awards = this.props.data;
        let content = awards.map(
            (exp, i) => {
                return (
                    <div className="award" key={'key-awards-' + (keyI++)}>
                        {i ? (<hr />) : ''}
                        <img className="icon" src="./imgs/award.jpeg" />
                        <h3 className="title">{exp.title}</h3>
                        <div className="organizer">{exp.organizer}</div>
                        <div className="date">{(new DateTime(exp.date)).getFormatDate('%F %Y')}</div>
                        <div className="description"
                             dangerouslySetInnerHTML={{__html: StringUtils.prepare(exp.description)}}
                        />
                    </div>
                );
            }
        );


        return (
            <div className="awards">
                {content}
            </div>
        );
    }
}