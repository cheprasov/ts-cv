import React from 'react';

let keyI = 0;

export default class Technologies extends React.Component {

    /**
     * @param {array} techs
     */
    getLine(techs) {
        let line = [];
        for (let t of techs) {
            if (Array.isArray(t)) {
                line[line.length - 1] += ` (${t.join(', ')})`;
            } else {
                line.push(t);
            }
        }
        return line.join(', ');
    }

    render() {
        let list = [];
        for (let techs of this.props.data) {
            let line = this.getLine(techs);
            if (!line) {
                continue;
            }
            list.push(
                <li key={'tech-list-' + (keyI++)}>{line}</li>
            );
        }

        return (
            <ul className="tech-list">{list}</ul>
        );
    }
}
