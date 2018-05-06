import React from 'react';

import Technologies from './technologies.js';

export default class Summary extends React.Component {

    getCV() {
        return this.props.cv;
    }

    getInfo() {
        let CV = this.getCV();
        let i = 0;
        return CV.about.map(
            (line) => {
                return <p key={'block-about-p-' + (i++)}>{line}</p>;
            }
        );
    }

    render() {
        return (
            <div className="summary">
                <div className="part left">
                    {this.getInfo()}
                </div>
                <div className="part right">
                    <Technologies data={this.getCV().skills} />
                </div>
            </div>
        );
    }
}
