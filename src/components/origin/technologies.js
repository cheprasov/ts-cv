import React from 'react';

let keyI = 0;

export default class Technologies extends React.Component {

    /**
     * @param {array} techs
     * @return {string}
     */
    static getLine(techs) {
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

    /**
     * @param {array} techs
     * @return {array}
     */
    static getLines(techs) {
        const lines = [];
        for (let tech of techs) {
            let line = this.getLine(tech);
            if (!line) {
                continue;
            }
            lines.push(line);
        }
        return lines;
    }

    render() {
        const list = this.constructor.getLines(this.props.data).map(
            (line) => {
                return <li key={'tech-list-item-' + (keyI++)}>{line}</li>
            }
        );

        return (
            <ul className="tech-list">{list}</ul>
        );
    }
}
