import React from 'react';

import Technologies from './../origin/technologies.js';

export default class Summary extends React.Component {

    getCV() {
        return this.props.cv;
    }

    render() {
        const skills = Technologies.getLines(this.getCV().skills).join(', ');
        return (
            <div className="skills justify">{skills}</div>
        );
    }
}
