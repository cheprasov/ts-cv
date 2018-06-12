import React from 'react';

import Technologies from './technologies.js';

export default class Summary extends React.Component {

    getCV() {
        return this.props.cv;
    }

    getInfo() {
        const hideContacts = this.props.config.hideContacts || false;
        const CV = this.getCV();
        let i = 0;
        return CV.about.map(
            (line) => {
                if (hideContacts) {
                    line = line.replace(new RegExp(CV.profile.first_name, 'g'), '<...>');
                }
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
