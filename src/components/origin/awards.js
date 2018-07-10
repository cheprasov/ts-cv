import React from 'react';

import DateTime from '/SRC/utils/date-time.js';
import { prepare } from '/SRC/utils/string-utils.js';

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
                        <div className="organizer">{exp.organizer}, {(new DateTime(exp.date)).getFormatDate('%F %Y')}</div>
                        <div className="description justify"
                             dangerouslySetInnerHTML={{__html: prepare(exp.description)}}
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
